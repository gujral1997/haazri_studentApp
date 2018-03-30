import React, {Component} from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import { Container, Header, Content, List, ListItem,Title, StyleProvider } from 'native-base';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import UCS401 from '../ratingTabs/UCS401';
import UTA007 from '../ratingTabs/UTA007';
import UES100 from '../ratingTabs/UES100';
import UCS402 from '../ratingTabs/UCS402';

const Tabs = TabNavigator({
  UCS401: { screen: UCS401 },
  UES100: { screen: UES100},
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


export default class rating extends Component {
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
                         </Container>
             </StyleProvider>
            );
      }
}

const styles = StyleSheet.create({
  image: {

 }
});
