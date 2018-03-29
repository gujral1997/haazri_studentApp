import React from 'react';
import {Navigator} from 'react-native-navigation';
import { Text, View, ImageBackground, Image, StyleSheet, Dimensions} from 'react-native';
import { AnimatedCircularProgress,  CircularProgress } from 'react-native-circular-progress';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
var {height, width} = Dimensions.get('window');

export default class TUE extends React.Component {
      constructor(props) {
            super(props);
      }


  componentDidMount() {

  }

  render() {

    return (
      <View
       >
             <Image source={require('../../images/tuesday.jpg')} style={styles.image}>
      </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 47,
    left: 30,
    width: 90,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 32,
    fontWeight: "100"
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#152d44',
    padding: 50
  },
  image: {
        height: height,
        width: width
 }
});
