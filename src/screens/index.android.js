import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import netAttendance from './netAttendance';
import mainTab from './mainTab';
export function registerScreens()
{
  Navigation.registerComponent('studentApp.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('studentApp.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('studentApp.netAttendance',()=>LoginScreen);
  Navigation.registerComponent('studentApp.mainTab',()=>mainTab);
}
