import { StackNavigator, DrawerNavigator, NavigationActions  } from 'react-navigation'
import { StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, View, AsyncStorage} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button, Icon, Left, Thumbnail } from 'native-base';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
var {height, width} = Dimensions.get('window');
width = 0.75*width;

import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import React, { Component } from 'react';

export default class drawer extends Component {

      state = {
            userName: [],
      }

      componentDidMount() {
            this._loadInitialState().done();
      }

      _loadInitialState = async () => {
            var value = await AsyncStorage.getItem('userName');
            if (value !== null) {
                  this.setState({userName: value});
            }
      }

      _toggleDrawer() {
           this.props.navigator.toggleDrawer({
                 to: 'closed',
                 side: 'left',
                 animated: true
           });
     }

     _goTomainTab() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "haazri_studentApp.mainTab"
		});
	}

      _goToafterLogin() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "haazri_studentApp.afterLogin"
		});
	}

      _goToabsent() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "haazri_studentApp.studentImage"
		});
	}

      _goTomarkit() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "haazri_studentApp.parameterScreen"
		});
	}

      componentWillMount() {
            this.props.navigator.setDrawerEnabled({
              side: 'left',
              enabled: true
            });
      }
      static navigatorStyle=startSingleScreenApplicationLogin;
      render () {
            return(
            <StyleProvider style={getTheme(material)}>
                  <Container>
                        <ImageBackground source={require('../images/Background-for-Menu.jpg')} style={styles.image}>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                              <Thumbnail source={{uri: 'http://192.168.56.1:8000/data/sih/haazri_model/nameList/'+this.state.userName+'/1.jpg'}} style={{height: 100, width: 100}} />
                              <Text style={styles.title}>Welcome {this.state.userName}!</Text>
                        </View>
                              <View style = {{flex:3}}>
                                    <TouchableOpacity
                                       style={styles.button}
                                       onPress={this._goToafterLogin.bind(this)}
                                      >
                                           <View style={{flex:1, flexDirection: 'row'}}>
                                                 <View style ={{flex:1}}>
                                                       <Image source={require('../ICONS/ICONS_WHITE/01.png')} style={styles.icon}/>
                                                 </View>
                                                <View style={{flex:8}}>
                                                      <Text style={styles.text}> Home</Text>
                                                </View>
                                           </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                        style={styles.button}
                                        onPress={this._goTomainTab.bind(this)}
                                       >
                                            <View style={{flex:1, flexDirection: 'row'}}>
                                                  <View style ={{flex:1}}>
                                                        <Image source={require('../ICONS/ICONS_WHITE/02.png')} style={styles.icon}/>
                                                  </View>
                                                 <View style={{flex:8}}>
                                                       <Text style={styles.text}> Attendance</Text>
                                                 </View>
                                            </View>
                                       </TouchableOpacity>
                              </View>
                    </ImageBackground>
                  </Container>
            </StyleProvider>
            );
      }
}

done =()=> {
      alert('Hello')
      this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true
        });
        this.props.navigator.resetTo({
            screen: 'haazri_studentApp.studentData'
        });

}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    marginTop: 5,
  },
  image: {
width: width,
height: height
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
 title :{
       color: 'white',
       fontSize:25,
       fontFamily: 'Raleway',
       fontWeight: 'bold'
 }
});
