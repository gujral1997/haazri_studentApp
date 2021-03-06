import React, {Component} from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import { Container, Header, Content, List, ListItem,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import MON from '../timeTableTabs/MON';
import TUE from '../timeTableTabs/TUE';
import WED from '../timeTableTabs/WED';
import THUR from '../timeTableTabs/THUR';
import FRI from '../timeTableTabs/FRI';

const Tabs = TabNavigator({
  Mon: { screen: MON },
  Tue: { screen: TUE},
  Wed: { screen: WED},
  Thur: { screen: THUR},
  Fri: { screen: FRI},
},
{
 tabBarOptions: {
       style: {
      backgroundColor: '#37383a',
    },
  }
});


export default class timeTable extends Component {
      toggleDrawer=()=> {
           this.props.navigator.toggleDrawer({
                 to: 'open',
                 side: 'left',
                 animated: true
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
                              <ImageBackground source={require('../../images/bg01.jpg')} style={styles.image}>
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
