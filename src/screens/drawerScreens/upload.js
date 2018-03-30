import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  ImageBackground,
  ListView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { Container, Header, Content, List, ListItem,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
var {height, width} = Dimensions.get('window');

export default class upload extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
        };
    this.onDayPress = this.onDayPress.bind(this);
  }

  componentDidMount() {
    return fetch('http://192.168.56.1:3000/calendar',{
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

  componentWillMount() {
        this.props.navigator.setDrawerEnabled({
          side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
          enabled: true // should the drawer be enabled or disabled (locked closed)
        });
 }

 static navigatorStyle=startSingleScreenApplicationLogin;

  render() {
if (this.state.dataSource.getRowCount() === 0)
{
    return (
      <StyleProvider style={getTheme(material)}>
           <Container>
                 <Header>
                        <Left>
                              <Button
                                    transparent onPress={this.toggleDrawer}
                                    >
                                          <Icon name="menu" />
                              </Button>
                        </Left>
                    <Title style={{marginTop: 10}}>Attendance Manager</Title>
                 </Header>
                 <ImageBackground source={require('../../images/HOMESCREEN.jpg')} style={styles.image}>
                       <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                        <View>
                        <Calendar
                           style={styles.calendar}
                           current={'2017-03-16'}
                           minDate={'2017-03-10'}
                           markingType={'period'}
                           theme={{
                             calendarBackground: '#333248',
                             textSectionTitleColor: 'white',
                             dayTextColor: 'red',
                             todayTextColor: 'white',
                             selectedDayTextColor: 'white',
                             monthTextColor: 'white',
                             selectedDayBackgroundColor: '#333248',
                             arrowColor: 'white',
                             // textDisabledColor: 'red',
                             'stylesheet.calendar.header': {
                              week: {
                                 marginTop: 5,
                                 flexDirection: 'row',
                                 justifyContent: 'space-between'
                              }
                             }
                           }}
                           markedDates={{
                             '2017-03-16': {textColor: rowData.textColor, color: rowData.color},
                              }}
                           hideArrows={false}
                        />
                 </View>}
                 />
           </ImageBackground>
           </Container>
      </StyleProvider>
      );
}
      else {
            return (
              <StyleProvider style={getTheme(material)}>
                   <Container>
                         <Header>
                                <Left>
                                      <Button
                                            transparent onPress={this.toggleDrawer}
                                            >
                                                  <Icon name="menu" />
                                      </Button>
                                </Left>
                            <Title style={{marginTop: 10}}>Attendance Manager</Title>
                         </Header>
                         <ImageBackground source={require('../../images/HOMESCREEN.jpg')} style={styles.image}>
                               <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) =>
                                <View>
                                <Calendar
                                   style={styles.calendar}
                                   current={'2017-03-16'}
                                   minDate={'2017-03-10'}
                                   markingType={'period'}
                                   theme={{
                                     calendarBackground: '#333248',
                                     textSectionTitleColor: 'white',
                                     dayTextColor: 'red',
                                     todayTextColor: 'white',
                                     selectedDayTextColor: 'white',
                                     monthTextColor: 'white',
                                     selectedDayBackgroundColor: '#333248',
                                     arrowColor: 'white',
                                     // textDisabledColor: 'red',
                                     'stylesheet.calendar.header': {
                                      week: {
                                         marginTop: 5,
                                         flexDirection: 'row',
                                         justifyContent: 'space-between'
                                      }
                                     }
                                   }}
                                   markedDates={{
                                     '2017-03-16': {textColor: rowData.textColor, color: rowData.color},
                                      }}
                                   hideArrows={false}
                                />
                         </View>}
                         />
                   </ImageBackground>
                   </Container>
              </StyleProvider>
              );
      }
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
},
image: {

}
});
