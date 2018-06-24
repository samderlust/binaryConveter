import React, { Component } from 'react';
import { View } from 'react-native';

import { Form, Item, Input, Button, Text } from 'native-base';

import * as color from '../config/color';
import * as outStyle from '../config/outStyles';


class HomeScreen extends Component {
    state = {
        number: 0,
        binary: []
    }

    decToBin = () => {
        console.log('fdsf');
        let bi = 0;
        let bi2;
        let {number} = this.state;
        const binary = []
        while (number > 1) {
            bi = number % 2;
            if (number % 2 !== 0) {
                number = number / 2 - 0.5
            } else number = number / 2
            if (number === 3 || number ===2 ) bi2 = 1;
            binary.push(bi)
        }
        binary.push(bi2)
        this.setState({binary})
        console.log(this.state.binary);
    }

    renderBin = () => {
        return this.state.binary.reverse().map((bin, i) => <Text style={styles.resultText} id={i}>{bin}</Text>)
    }

    render() {
        return (
            <View style={{ backgroundColor: color.gray, flex: 1 }} >

                <View style={ outStyle.binaryStyle } >
                    {this.renderBin()}
                </View>
                <Form>
                    <Item>
                        <Input
                            placeholder='Decimal Here..'
                            keyboardType='numeric'
                            style={styles.inputField}
                            value={this.state.number}
                            onChangeText={number => this.setState({ number, binary: [] })}
                        />

                    </Item>
                    <Button
                        full
                        large
                        info
                        onPress={this.decToBin}
                    >
                        <Text style={{ fontSize: 30 }} >Convert</Text>
                    </Button>
                </Form>
            </View>
        );
    }
}

const styles = {
    resultText: {
        fontSize: 50,
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

export default HomeScreen;
