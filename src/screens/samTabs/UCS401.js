import React from 'react';
import {Navigator} from 'react-native-navigation';
import { Text, View, ImageBackground, StyleSheet, ScrollView, PanResponder, ToastAndroid } from 'react-native';
import { AnimatedCircularProgress,  CircularProgress } from 'react-native-circular-progress';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import { Dropdown } from 'react-native-material-dropdown';
const MAX_POINTS = 100;

function colours(rating)
{
      if(rating<=40)
     {
            return "#ef3941";
     }
     else {
            {
                 return "#b3d568";
          }
     }
}

export default class UCS401 extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  color: '#dedede',
                  rating: 60
            }
      }

  componentDidMount() {
        this.refs.circularProgress.performLinearAnimation(this.state.rating, 1000);
        return fetch('http://192.168.56.1:3000/rating',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson.message),
            }, function() {
              // do something with new state
            });
          })
          .catch(() => {
                this.props.navigator.push({
                     screen: "navigation.afterLogin"
              })
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

        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }
        
    const fill = this.state.rating / MAX_POINTS * 100;

    return (
      <View
        style={styles.container}
       >
        <AnimatedCircularProgress
          size={200}
          width={5}
          fill={fill}
          tintColor={colours(this.state.rating)}
          backgroundColor="#3d5875"
          ref='circularProgress'
        >
          {
            (fill) => (
              <Text style={styles.rating}>
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
  rating: {
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
