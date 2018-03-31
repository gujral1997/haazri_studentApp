import React from 'react';
import {Navigator} from 'react-native-navigation';
import { Text, View, ImageBackground, StyleSheet, ScrollView, PanResponder, ToastAndroid, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress,  CircularProgress } from 'react-native-circular-progress';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import { Dropdown } from 'react-native-material-dropdown';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class UTA007 extends React.Component {

  componentDidMount() {

  }

  constructor(props)
  {
    super(props);
  }

  ratingCompleted(rate) {

       fetch('http://192.168.43.137:3000/rating',{
        method:'POST',
        headers:{
           'Accept':'application/json',
           'Content-Type':'application/json',
        },
        body:JSON.stringify({
           rating:rate
        })
       })
       .then((response)=>response.json())
       .then((res)=>{
           alert('Rating is updated')
           //If login,doesnt succeed
        }
      )
       .catch(function(){
             ToastAndroid.showWithGravityAndOffset(
                      'Can\'t connect to Internet!',
                      ToastAndroid.LONG,
                      ToastAndroid.BOTTOM,
                      25,
                      50
                    );
       });

}

  render() {

    return (
      <ImageBackground
        source= {require('../../images/review-screen.png')}
        style={styles.container}>
        <Text style={{fontSize: 30, color:'#e0e0e0', fontFamily: 'Raleway', fontWeight: 'bold'}}>
             What did you think of this lecture ?
        </Text>
        <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "Average", "OK", "Good"]}
              defaultRating={0}
              size={25}
              onFinishRating={this.ratingCompleted}
            />
 </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
    padding: 30
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
