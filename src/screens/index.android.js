import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import netAttendance from './netAttendance';
import mainTab from './drawerScreens/mainTab';
import drawer from './drawer';
import afterLogin from './afterLogin';
export function registerScreens()
{
  Navigation.registerComponent('haazri_studentApp.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('haazri_studentApp.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('haazri_studentApp.netAttendance',()=>LoginScreen);
  Navigation.registerComponent('haazri_studentApp.mainTab',()=>mainTab);
  Navigation.registerComponent('haazri_studentApp.drawer',()=>drawer);
  Navigation.registerComponent('haazri_studentApp.afterLogin',()=>afterLogin);
}
