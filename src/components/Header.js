import React from 'react';
import { Header, Icon, Title, Right, Button, Body } from 'native-base';

import * as color from '../config/color';

const AppHeader = ({ onPress }) => (
  <Header
    style={{
      backgroundColor: color.primary
    }} >
    <Body>
      <Title style={{ left: '60%', fontSize: 25 }} >Converter</Title>
    </Body>
    <Right>
      <Button
        onPress={onPress}
        transparent>
        <Icon style={{ fontSize: 30 }} type='FontAwesome' name='user-circle' />
      </Button>
    </Right>
  </Header>
);

export default AppHeader;
