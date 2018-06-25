import React from 'react';
import { Modal, View, TouchableOpacity} from 'react-native';
import * as color from '../config/color';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const InfoModal = ({visible, outPress}) => (
  <Modal
    visible={visible}
    transparent
  >
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: color.primaryTran,
        flex: 1,
        transparent: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
      onPress={outPress}
    >
      <TouchableOpacity
        style={{}}
        onPress={() => { console.log('item'); }}
        activeOpacity={1}
      >
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>

              <Body>
                <Text>AlgonConverter</Text>
                <Text note>Version 1.0</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                  This is a product of Sam.
                  This converter is made for helping student to double check while they doing homework with
                  binary, decimal, hex, octal converting.
                  If you find any bug, or have a feedback. Feel free to send it to me at samderlust@gmail.com
                  For more info. Please visit: samderlust.com
              </Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </TouchableOpacity>
  </Modal>
);
export default InfoModal;
