import React, { Component } from "react";
import { ScrollView, View, KeyboardAvoidingView } from "react-native";

import { Form, Item, Input, Button, Text, Label } from "native-base";

import * as color from "../config/color";
import * as outStyle from "../config/outStyles";

class FloatingPoint extends Component {
  INITIAL_STATE = {
    number: "",
    binary: [],
    octal: [],
    hex: [],
    mantissa: [],
    exp: [],
    ieee: []
  };
  state = this.INITIAL_STATE;

  handleIEEE = () => {
    const binary = [...this.state.binary];
    let mantissa = [];
    let e = binary.indexOf(".") - binary.indexOf(1);
    e = e > 0 ? e - 1 : e;
    e += 127;
    binary.splice(binary.indexOf("."), 1);
    mantissa = binary.slice(binary.indexOf(1) + 1, binary.length);
    const lenght = mantissa.length;
    for (let i = lenght; i <= 22; i++) {
      mantissa.push(0);
    }
    let exp = this.calExponent(e);
    this.setState({ mantissa, exp }, () => this.createIeee());
  };

  createIeee = () => {
    let sign = this.state.number.includes("-") ? 1 : 0;
    const ieee = [sign, ...this.state.exp, ...this.state.mantissa];
    this.setState({ ieee }, () => this.convertIeeeToHex());
  };

  handleMantissa = () => {
    let { number } = this.state;
    const binary2 = ["."];
    number = Math.abs(number) - Math.floor(Math.abs(number));
    let breakPoint = 0;
    while (number !== 0 && breakPoint !== 15) {
      number = number * 2;
      floorNum = Math.floor(number);
      binary2.push(floorNum);
      number = number - floorNum;
      breakPoint++;
    }
    return binary2;
  };

  convertIeeeToHex = () => {
    const hex = [];
    const ieee = [...this.state.ieee];
    let num;
    let a = ieee.length;
    while (a > 0) {
      num = ieee.slice(a - 4 < 0 ? 0 : a - 4, a).join("");
      hex.unshift(this.binaryToHex(num));
      a -= 4;
    }
    this.setState({ hex });
  };

  calExponent = exp => {
    let bi = 0;
    const binary1 = [];
    while (exp > 1) {
      bi = exp % 2;
      exp = Math.floor(exp / 2);
      binary1.unshift(bi);
    }
    binary1.unshift(exp);
    while (binary1.length < 8) {
      binary1.unshift(0);
    }
    return binary1;
  };

  decToBin = () => {
    let bi = 0;
    let { number } = this.state;
    number = Math.floor(Math.abs(number));
    const binary1 = [];
    while (number > 1) {
      bi = number % 2;
      number = Math.floor(number / 2);
      binary1.unshift(bi);
    }
    binary1.unshift(number);
    return binary1;
  };

  decimalToOctal = () => {
    let bi = 0;
    let { number } = this.state;
    const octal = [];
    while (number >= 8) {
      bi = number % 8;
      number = Math.floor(number / 8);
      octal.unshift(bi);
    }
    octal.unshift(number);
    return octal;
  };

  convert = () => {
    this.setState(
      {
        binary: [...this.decToBin(), ...this.handleMantissa()]
      },
      () => this.handleIEEE()
    );
  };

  binaryToHex = num => {
    num = Number(num);
    switch (num) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 10:
        return 2;
      case 11:
        return 3;
      case 100:
        return 4;
      case 101:
        return 5;
      case 110:
        return 6;
      case 111:
        return 7;
      case 1000:
        return 8;
      case 1001:
        return 9;
      case 1010:
        return "A";
      case 1011:
        return "B";
      case 1100:
        return "C";
      case 1101:
        return "D";
      case 1110:
        return "E";
      case 1111:
        return "F";
      default:
        return num;
    }
  };
  decimalToHeximal = () => {
    let bi = 0;
    let { number } = this.state;
    const hex = [];
    while (number >= 16) {
      bi = this.checkHex(number % 16);
      number = Math.floor(number / 16);
      hex.unshift(bi);
    }
    hex.unshift(this.checkHex(number));
    return hex;
  };

  renderResult = array => {
    return this.state[array].map((bin, i) => (
      <Text style={styles.resultText} id={i}>
        {bin}
      </Text>
    ));
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: color.gray, flex: 1 }}>
        <Form
          style={{ flexDirection: "row", flex: 1, flexDirection: "column" }}
        >
          <Item>
            <Input
              placeholder="Decimal Here.."
              keyboardType="numeric"
              style={styles.inputField}
              value={this.state.number}
              onChangeText={number =>
                this.setState({ ...this.INITIAL_STATE, number })
              }
            />
          </Item>
          <Button full large info onPress={this.convert}>
            <Text style={{ fontSize: 30 }}>Convert</Text>
          </Button>
        </Form>

        <View style={outStyle.binaryContainer}>
          <Label>Binary</Label>
          <View style={outStyle.showStyle}>{this.renderResult("binary")}</View>
        </View>

        <View style={outStyle.hexContainer}>
          <Label style={{ color: "white" }}>Mantissa</Label>
          <View style={outStyle.showStyle}>
            {this.renderResult("mantissa")}
          </View>
        </View>

        <View style={outStyle.binaryContainer}>
          <Label>Exponent</Label>
          <View style={outStyle.showStyle}>{this.renderResult("exp")}</View>
        </View>

        <View style={outStyle.hexContainer}>
          <Label style={{ color: "white" }}>iEEE</Label>
          <View style={outStyle.showStyle}>{this.renderResult("ieee")}</View>
        </View>

        <View style={outStyle.binaryContainer}>
          <Label>Hex</Label>
          <View style={outStyle.showStyle}>{this.renderResult("hex")}</View>
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>
    );
  }
}

const styles = {
  resultText: {
    fontSize: 30,
    color: "white"
  },
  inputField: {
    height: 60,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    align: "center"
  }
};

export default FloatingPoint;
