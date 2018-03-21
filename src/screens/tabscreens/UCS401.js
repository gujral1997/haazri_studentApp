import React from 'react';
import {Navigator} from 'react-native-navigation';
import { Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
export default class UCS401 extends React.Component {
      static navigatorStyle=startSingleScreenApplicationLogin;
      componentDidMount()
      {
            this.refs.circularProgress.performLinearAnimation(70, 2000);
      }
  render() {
    return (
          <View >
         <ImageBackground source={require('../../images/bg01.jpg')} style={styles.image}>
          <View>
                <AnimatedCircularProgress
            ref='circularProgress'
              size={200}
              width={30}
              fill={70}
              tintColor="#00e0ff"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#3d5875" />
          </View>
    </ImageBackground>
</View>

    );
  }
}

const styles = StyleSheet.create({
  image: {
        justifyContent: 'center',
        alignItems: 'center'
 }
});
