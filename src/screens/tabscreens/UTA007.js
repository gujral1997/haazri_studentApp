import React from 'react';
import {Navigator} from 'react-native-navigation';
import { Text, View, ImageBackground, StyleSheet, ScrollView, PanResponder } from 'react-native';
import { AnimatedCircularProgress,  CircularProgress } from 'react-native-circular-progress';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
const MAX_POINTS = 100;

function colours(points)
{
      if(points<=75)
     {
            return "red";
     }
     else {
            {
                 return "green";
          }
     }
}

export default class UTA007 extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  points: 90,
                  color: '#dedede'
            }
      }


  componentDidMount() {
        this.refs.circularProgress.performLinearAnimation(this.state.points, 1000);
  }

  render() {
    const fill = this.state.points / MAX_POINTS * 100;

    return (
      <View
        style={styles.container}
       >
        <AnimatedCircularProgress
          size={200}
          width={30}
          fill={fill}
          tintColor={colours(this.state.points)}
          backgroundColor="#3d5875"
          ref='circularProgress'
        >
          {
            (fill) => (
              <Text style={styles.points}>
                { Math.round(MAX_POINTS * fill / 100) } %
              </Text>
        )
      }
        </AnimatedCircularProgress>
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
});
