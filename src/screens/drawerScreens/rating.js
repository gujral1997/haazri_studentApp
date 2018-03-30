import React, {Component} from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import { Container, Header, Content, List, ListItem,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
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

      toggleDrawer=()=> {
           this.props.navigator.toggleDrawer({
                 to: 'open',
                 side: 'left',
                 animated: true
           });
     }

      _goToafterLogin() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "haazri_studentApp.afterLogin"
		});
	}

      static navigatorStyle=startSingleScreenApplicationLogin;

      render()
      {
            return(
                  <StyleProvider style={getTheme(material)}>
                         <Container>
                               <Header>
                                     <Left>
                                           <TouchableOpacity
                                            onPress={this.toggleDrawer}
                                                 >
                                                       <Icon name="menu" />
                                           </TouchableOpacity>
                                     </Left>
                                 <Title style={{marginTop: 5}}>Attendance Manager</Title>
                               </Header>
                              <Tabs />

                         </Container>
             </StyleProvider>
            );
      }
}

const styles = StyleSheet.create({
  image: {

 },
 points: {
   backgroundColor: 'transparent',
   position: 'absolute',
   top: 75,
   left: 50,
   width: 90,
   textAlign: 'center',
   color: '#fff',
   fontSize: 32,
   fontWeight: "100"
 },
 container: {
   flex: 1,
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 50
 },
 button: {
    backgroundColor: 'transparent',
    padding: 30
  },
  text: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Stark'
 },
 icon: {
   height: 24,
   width: 24,
   marginTop: 5,
 },
});
