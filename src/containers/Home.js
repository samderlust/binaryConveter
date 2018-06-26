import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import {View} from 'react-native';
import Decimal from '../components/Decimal';
import Binary from '../components/Binary';
import InfoModal from '../components/InfoModal';
import FloatingPoint from '../components/FloatingPoint';

import AppHeader from '../components/Header';

class Home extends Component {

    state = {
        visible: false
    }

  render () {
    return (
      <Container>
        <AppHeader onPress={() => this.setState({visible: true})} />
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
          <Tab heading='Floating Point'>
            <FloatingPoint />
          </Tab>
        </Tabs>
        <InfoModal visible={this.state.visible} outPress={() => this.setState({visible: false})} />
      </Container>
    );
  }
}

export default Home;
