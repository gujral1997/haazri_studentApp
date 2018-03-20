import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import netAttendance from './netAttendance';
import mainTab from './mainTab';
import subject1 from './subject1';
import subject2 from './subject2';
export function registerScreens()
{
  Navigation.registerComponent('studentApp.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('studentApp.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('studentApp.netAttendance',()=>LoginScreen);
  Navigation.registerComponent('studentApp.mainTab',()=>mainTab);
  Navigation.registerComponent('studentApp.subject2',()=>subject2);
  Navigation.registerComponent('studentApp.subject1',()=>subject1);
}
