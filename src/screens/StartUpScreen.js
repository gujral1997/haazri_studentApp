import React,{Component} from 'react';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';
import {StyleSheet,Text,View,Image,ImageBackground,Animated,Easing } from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplication} from '../styles/navigatorStyles';
export default class StartUpScreen extends Component {
  static navigatorStyle=startSingleScreenApplication;
  componentWillMount()
  {
    setTimeout(
      ()=>{
        this.props.navigator.push(
          {
            screen:'haazri_studentApp.afterLogin',
          }
        );
 },3

    );
    this.props.navigator.setDrawerEnabled({
      side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      enabled: false // should the drawer be enabled or disabled (locked closed)
    });
  }
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3);
    Animated.spring(
      this.springValue,
      {
        toValue: 0.8,
        friction: 1
      }
    ).start()
  }
  render() {
    return (
          <View style ={styles.container}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
              <ImageBackground source={require('../../src/images/bg.png')} style={styles.image}>
              <View style = {{flex:1}}/>
                <View style = {{flex:3}}>
                       <Animated.Image
                        style={{ justifyContent: 'center',
                        alignItems: 'center', width: 400, height: 600,transform: [{scale: this.springValue}] }}
                        source={require('../../src/images/logo.png')}/>
                </View>
                <View style = {{flex:1}}/>
              </ImageBackground>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:420,
    height:660,
  },
});
