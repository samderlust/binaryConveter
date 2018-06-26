import React, { Component } from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';

import { Form, Item, Input, Button, Text, Label } from 'native-base';

import * as color from '../config/color';
import * as outStyle from '../config/outStyles';


class Decimal extends Component {
    state = {
        number: '',
        binary: [],
        octal: [],
        hex: [],
        mantissa: []
    }

    handleMantissa = () => {
        let { number } = this.state;
        const binary2 = ['.'];
        number = number - Math.floor(number)
        let breakPoint = 0;
        while (number !== 0 && breakPoint !== 15 ) {
            number = number * 2;
            floorNum = Math.floor(number);
            binary2.push(floorNum);
            number = number - floorNum;
            breakPoint++;
            console.log(breakPoint);
        }
        return binary2;
    }

    decToBin = () => {
        let bi = 0;
        let {number} = this.state;
        number = Math.floor(number);
        const binary1 = [];
        while (number > 1) {
            bi = number % 2;
            number = Math.floor(number/2)
            binary1.unshift(bi)
        }
        binary1.unshift(number);
        return binary1
    }

    decimalToOctal = () => {
        let bi = 0;
        let {number} = this.state;
        const octal = []
        while (number >= 8) {
            bi = number % 8;
            number = Math.floor(number/8)
            octal.unshift(bi)
        }
        octal.unshift(number)
        return octal;
    }

    convert = () => {
        let {number} = this.state;
        if (number !=='' && number.includes('.')) {
            this.setState({ binary: [...this.decToBin(), ...this.handleMantissa()] })
        } else if (number !== '') {
            this.setState({
                binary: this.decToBin(),
                octal: this.decimalToOctal(),
                hex: this.decimalToHeximal()
            })   
        }
    }

    checkHex = (number) => {
        let num = Number(number);
        switch (num) {
            case 10: return num = 'A';
            case 11: return num = 'B';
            case 12: return num = 'C';
            case 13: return num = 'D';
            case 14: return num = 'E';
            case 15: return num = 'F';
            default: return num;
        }
    }

    decimalToHeximal = () => {
        let bi = 0;
        let {number} = this.state;
        const hex = []
        while (number >= 16) {
            bi = this.checkHex(number % 16);
            number = Math.floor(number/16)
            hex.unshift(bi)
        }
        hex.unshift(this.checkHex(number))
        return hex;
    }

    renderBin = (array) => {
        return this.state[array].map((bin, i) => <Text style={styles.resultText} id={i}>{bin}</Text>)
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: color.gray, flex: 1 }} >
                <View style={outStyle.binaryContainer} >
                    <Label>Binary</Label>
                    <View style={ outStyle.showStyle } >  
                        {this.renderBin('binary')}
                    </View>
                </View>
                <View style={outStyle.octalContainer} >                
                <Label>Octal</Label>
                <View style={ outStyle.showStyle } >
                    {this.renderBin('octal')}
                </View>
                </View>

                <View style={outStyle.hexContainer} >
                <Label>Hex</Label>
                <View style={ outStyle.showStyle } >
                    {this.renderBin('hex')}
                </View>
                </View>
                
                <Form>
                    <Item >
                        <Input
                            placeholder='Type Here..'
                            keyboardType='numeric'
                            style={styles.inputField}
                            value={this.state.number}
                            onChangeText={number => this.setState({ number, binary: [], octal: [], hex: [] })}
                        />

                    </Item>
                    <Button
                        full
                        large
                        info
                        onPress={this.convert}
                    >
                        <Text style={{ fontSize: 30 }} >Convert</Text>
                    </Button>
                </Form>
            </ScrollView>
        );
    }
}

const styles = {
    resultText: {
        fontSize: 30,
        color: 'white'
    },
    inputField: {
        height: 60,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        align: 'center'
    }
}

export default Decimal;
