import { Container, Header, Content, List, ListItem,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
var {height, width} = Dimensions.get('window');
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class UCS402 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
          <Calendar
          style={styles.calendar}
          current={'2018-03-16'}
          minDate={'2018-03-01'}
          displayLoadingIndicator
          markingType={'period'}
          theme={{
           calendarBackground: '#ededed',
           textSectionTitleColor: 'black',
           dayTextColor: 'black',
           todayTextColor: 'black',
           selectedDayTextColor: 'black',
           monthTextColor: 'black',
           selectedDayBackgroundColor: 'black',
           arrowColor: 'black',
           'stylesheet.calendar.header': {
             week: {
               marginTop: 5,
               flexDirection: 'row',
               justifyContent: 'space-between'
             }
           }
          }}
          markedDates={{
             '2018-03-01': {startingDay: true, color: '#96f279'},
             '2018-03-02': {color: '#96f279'},
             '2018-03-03': {color: '#96f279'},
             '2018-03-04': {color: '#ededed'},
             '2018-03-05': {color: '#96f279'},
             '2018-03-06': {color: '#96f279'},
             '2018-03-07': {color: '#96f279'},
             '2018-03-08': {color: '#96f279'},
             '2018-03-09': {color: '#96f279'},
             '2018-03-10': {color: '#96f279'},
             '2018-03-11': {color: '#ededed'},
             '2018-03-12': {color: '#96f279'},
             '2018-03-13': {color: '#96f279'},
             '2018-03-14': {color: '#96f279'},
             '2018-03-15': {color: '#96f279'},
             '2018-03-16': {color: '#96f279'},
            '2018-03-17': {color: '#96f279'},
            '2018-03-18': {color: '#ededed'},
            '2018-03-19': {color: '#96f279'},
            '2018-03-20': {startingDay: true, color: '#f97580'},
            '2018-03-21': {color: '#f97580'},
            '2018-03-22': {color: '#f97580'},
            '2018-03-23': {endingDay: true, color: '#f97580'},
            '2018-03-24': {startingDay: true, color: '#96f279'},
            '2018-03-25': {color: '#ededed'},
            '2018-03-26': {color: '#96f279'},
            '2018-03-27': {color: '#96f279'},
            '2018-03-28': {color: '#96f279'},
            '2018-03-29': {color: '#96f279'},
            '2018-03-30': {color: '#96f279'},
            '2018-03-31': {color: '#96f279',endingDay: true}
        }}
          hideArrows={false}
       />
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
