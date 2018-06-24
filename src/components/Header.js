import React from 'react';
import { Header, Body, Title } from 'native-base';

import * as color from '../config/color';

const AppHeader = () => (
  <Header
    style={{
      backgroundColor: color.primary,
      flexDirection: 'column',
      justifyContent: 'center'
    }} >
    <Title>Converter</Title>
  </Header>
);

export default AppHeader;
