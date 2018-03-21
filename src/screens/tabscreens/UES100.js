import React from 'react';
import {Navigator} from 'react-native-navigation';
import { Text, View } from 'react-native';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
export default class UES100 extends React.Component {
      static navigatorStyle=startSingleScreenApplicationLogin;
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello!</Text>
      </View>
    );
  }
}
