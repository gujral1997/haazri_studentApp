import React from 'react';
import { Text, View } from 'react-native';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
export default class UTA007 extends React.Component {
      static navigatorStyle=startSingleScreenApplicationLogin;
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello!</Text>
      </View>
    );
  }
}
