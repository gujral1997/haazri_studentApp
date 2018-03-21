import React, {Component} from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import { Container, Header, Content, List, ListItem,Title, StyleProvider } from 'native-base';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import UCS401 from './tabscreens/UCS401';
import UTA007 from './tabscreens/UTA007';
import UES100 from './tabscreens/UES100';
import UCS402 from './tabscreens/UCS402';

const Tabs = TabNavigator({
  UCS401: { screen: UCS401 },
  UES100: { screen: UTA007},
  UTA007: { screen: UTA007},
  UCS402: { screen: UCS402},
},
{
 tabBarOptions: {
       style: {
      backgroundColor: '#37383a',
    },
  }
});


export default class mainTab extends Component {
      static navigatorStyle=startSingleScreenApplicationLogin;

      render()
      {
            return(
                  <StyleProvider style={getTheme(material)}>
                         <Container>
                           <Header>
                             <Title>Attendance Manager</Title>
                           </Header>
                              <Tabs />
                              <ImageBackground source={require('../images/bg01.jpg')} style={styles.image}>
                              </ImageBackground>
                         </Container>
             </StyleProvider>
            );
      }
}

const styles = StyleSheet.create({
  image: {

 }
});
