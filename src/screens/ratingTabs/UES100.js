import React from 'react';
import {Navigator} from 'react-native-navigation';
import { Text, View, ImageBackground, StyleSheet, ScrollView, PanResponder } from 'react-native';
import { AnimatedCircularProgress,  CircularProgress } from 'react-native-circular-progress';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import { Dropdown } from 'react-native-material-dropdown';
const MAX_POINTS = 100;

function colours(points)
{
      if(points<=75)
     {
            return "#ef3941";
     }
     else {
            {
                 return "#b3d568";
          }
     }
}

export default class UES100 extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  points: 60,
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
          width={5}
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
    backgroundColor: '#152d44',
    padding: 50
  },
});
