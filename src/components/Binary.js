import React, { Component } from 'react';
import { View } from 'react-native';
import { Form, Label, Item, Input, Button, Text } from 'native-base';
import * as color from '../config/color';
import * as outStyle from '../config/outStyles';

class Binary extends Component {
  
    state = {
        binary: [],
        num : 0,
        hex: []
    }

    inputBinary = (bi) => {
      const binary = [...this.state.binary];
      binary.push(bi);
      this.setState({binary}, () => {
        this.binaryToDecimal();
        this.convertBinaryToHex();
      });
    }

    inputDelete = () => {
      const binary = [...this.state.binary];
      binary.splice(binary.length-1,1)
      this.setState({binary}, () => {
        this.binaryToDecimal();
        this.convertBinaryToHex();
      });
    }

    renderResult = (name) => {
       return this.state[name].map((bi, i) => <Text style={styles.resultText} id={i} >{bi}</Text>)
    }

    binaryToDecimal = () => {
      let num = 0;
      const binary = [...this.state.binary];
      binary.reverse().map((bi, i) => {
        num += bi * Math.pow(2,i)
      })
      this.setState({num});
    }

    convertBinaryToHex = () => {
      const hex = [];
      const binary = [...this.state.binary];
      let num;
      //a = binary.length
      let a = binary.length;
      //a-4<0 ? 0 : a-4
      //user slice a-4, a
      while (a > 0) {
        num = binary.slice(a-4 < 0 ? 0 : a-4, a).join('');
        hex.unshift(this.binaryToHex(num));
        a -= 4;
      }
      //use join method
      this.setState({hex});
    }

    binaryToHex = (num) => {
      num = Number(num)
      switch (num) {
        case 1: return 1;
        case 10: return 2;
        case 11: return 3;
        case 100: return 4;
        case 101: return 5;
        case 110: return 6;
        case 111: return 7;
        case 1000: return 8;
        case 1001: return 9;
        case 1010: return 'A';
        case 1011: return 'B';
        case 1100: return 'C';
        case 1101: return 'D';
        case 1110: return 'E';
        case 1111: return 'F';
        default: return num;
      }
    }


  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={outStyle.binaryContainer}>
          <Label>Binary</Label>
          <View style={outStyle.showStyle} >
            {this.renderResult('binary')}
          </View>
        </View>
        <View style={outStyle.hexContainer}>
          <Label>Hex</Label>
          <View style={outStyle.showStyle} >
            {this.renderResult('hex')}
          </View></View>
        <View style={outStyle.deciContainer} >
          <Label>Decimal</Label>
          <Text style={styles.resultText} >
            {this.state.num}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }} >
          <Button
            large
            success
            style={styles.button}
            onPress={() => this.inputBinary(1)}
          >
            <Text style={styles.buttonText} >1</Text>
          </Button>

          <Button
            large
            warning
            style={styles.button}
            onPress={() => this.inputBinary(0)}
          >
            <Text style={styles.buttonText} >0</Text>
          </Button>
          <View style={{ flexDirection: 'column', flex: 1, marginTop: 'auto', height: 260, width: '35%' }} >
            <Button
              large
              danger
              style={styles.buttonHalf}
              onPress={this.inputDelete}
            >
              <Text style={styles.buttonText} >Del</Text>
            </Button>

            <Button
              large
              info
              style={styles.buttonHalf}
              onPress={() => this.setState({ num: 0, binary: [], hex: [] })}
            >
              <Text style={styles.buttonText} >Clr</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

styles = {
  button: {
    height: 260,
    width: '35%',
    marginTop: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonHalf: {
    width: '100%',
    height: 130,
    flex: 1,
    // marginTop: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: color.binaryColor,
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultText: {
        fontSize: 30,
        color: 'white'
    }
}

export default Binary;