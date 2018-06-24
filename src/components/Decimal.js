import React, { Component } from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';

import { Form, Item, Input, Button, Text, Label } from 'native-base';

import * as color from '../config/color';
import * as outStyle from '../config/outStyles';


class Decimal extends Component {
    state = {
        number: 0,
        binary: [],
        octal: [],
        hex: [],
        mantissa: []
    }

    handleMantissa = () => {
        let { number } = this.state;
        const binary = [...this.state.binary, '.'];
        number = number - Math.floor(number)
        let breakPoint = 0;
        while (number !== 0 && breakPoint !== 15 ) {
            number = number * 2;
            floorNum = Math.floor(number);
            binary.push(floorNum);
            number = number - floorNum;
            breakPoint++;
            console.log(breakPoint);
        }
        this.setState({binary});
    }

    decToBin = (callback) => {
        let bi = 0;
        let {number} = this.state;
        number = Math.floor(number);
        const binary = [...this.state.binary]
        while (number > 1) {
            bi = number % 2;
            number = Math.floor(number/2)
            binary.unshift(bi)
        }
        binary.unshift(number)

        this.setState({binary}, () => callback())
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
        this.setState({octal})
    }

    convert = () => {
        if (this.state.number.includes('.')) {
            this.decToBin(this.handleMantissa)
        } else {
            this.decToBin(() => {});
            this.decimalToOctal();
            this.decimalToHeximal();
        }

        console.log(this.state);
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
        this.setState({hex})
        console.log(this.state)
    }

    renderBin = (array) => {
        return this.state[array].map((bin, i) => <Text style={styles.resultText} id={i}>{bin}</Text>)
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: color.gray, flex: 1 }} >
                <Label>Binary</Label>
                <View style={ outStyle.binaryStyle } >
                    {this.renderBin('binary')}
                </View>
                <Label>Octal</Label>
                <View style={ outStyle.octalStyle } >
                    {this.renderBin('octal')}
                </View>
                <Label>Hex</Label>
                <View style={ outStyle.hexStyle } >
                    {this.renderBin('hex')}
                </View>
                
                <Form>
                    <Item>
                        <Input
                            placeholder='Decimal Here..'
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
        fontSize: 40,
        marginTop: 10,
        marginBottom: 10,
        align: 'center'
    }
}

export default Decimal;
