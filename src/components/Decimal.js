import React, { Component } from "react";
import { ScrollView, View, KeyboardAvoidingView } from "react-native";
import { Form, Item, Input, Button, Text, Label } from "native-base";

import * as color from "../config/color";
import * as outStyle from "../config/outStyles";
import * as method from "../config/convertMethod";

import switchMethod from "../config/switchMethods";

class Decimal extends Component {
  initialState = {
    number: "",
    binary: "",
    octal: "",
    hex: "",
    mantissa: [],
    input: ""
  };

  state = this.initialState;

  //   ============== New Coder ===========

  onConvertToDecimal = (type, value) => {
    let { number } = this.state;
    number = switchMethod(type, value);
    this.setState({ number }, () => this.onConvertFromDecimal());
  };

  onConvertFromDecimal = () => {
    const { number } = this.state;
    const result = switchMethod("decimal", number);
    this.setState({
      binary: result.binary,
      hex: result.hex,
      octal: result.octal,
      number: result.decimal
    });
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: color.gray, flex: 1 }}>
        <View style={outStyle.binaryContainer}>
          <Label>Binary</Label>
          <Item>
            <Input
              placeholder={String(this.state.binary) || "binary here"}
              keyboardType="numeric"
              style={styles.inputField}
              value={this.state.binary}
              onChangeText={binary =>
                this.setState({ binary }, () =>
                  this.onConvertToDecimal("binary", this.state.binary)
                )
              }
              onFocus={() => this.setState({ ...this.initialState })}
              //   onEndEditing={this.onchangeBinary}
            />
          </Item>
        </View>

        <View style={outStyle.octalContainer}>
          <Label>Octal</Label>
          <Item>
            <Input
              placeholder={String(this.state.octal) || "octal here"}
              keyboardType="default"
              style={styles.inputField}
              value={this.state.octal}
              onChangeText={octal =>
                this.setState({ octal }, () =>
                  this.onConvertToDecimal("octal", this.state.octal)
                )
              }
              onFocus={() => this.setState({ ...this.initialState })}
            />
          </Item>
        </View>

        <View style={outStyle.binaryContainer}>
          <Label>Hex</Label>
          <Item>
            <Input
              placeholder={String(this.state.hex) || "hex here"}
              keyboardType="default"
              style={styles.inputField}
              value={this.state.hex}
              onChangeText={hex => {
                this.setState({ ...this.initialState, hex }, () =>
                  this.onConvertToDecimal("hex", this.state.hex)
                );
              }}
              onFocus={() => this.setState({ ...this.initialState })}
            />
          </Item>
        </View>

        <View style={outStyle.deciContainer}>
          <Label>Decimal</Label>
          <Item>
            <Input
              placeholder={String(this.state.number) || "decimal here.."}
              keyboardType="numeric"
              style={styles.inputField}
              value={this.state.number}
              onChangeText={number =>
                this.setState({ number }, () => this.onConvertFromDecimal())
              }
              onFocus={() => this.setState({ ...this.initialState })}
            />
          </Item>
        </View>
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
    minHeight: 60,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    // textAlign: "center",
    color: "white",
    flex: 1,
    flexWrap: "wrap"
  }
};

export default Decimal;
