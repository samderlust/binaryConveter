import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import {View} from 'react-native';
import Decimal from '../components/Decimal';
import Binary from '../components/Binary';

import AppHeader from '../components/Header';

class TabsAdvancedExample extends Component {
  render () {
    return (
      <Container>
        <AppHeader />
        <Tabs
          initialPage={0}
          tabBarPosition='bottom'
        >
          <Tab heading='Decimal'>
            <Decimal />
          </Tab>
          <Tab heading='Binary'>
            <Binary />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsAdvancedExample;
