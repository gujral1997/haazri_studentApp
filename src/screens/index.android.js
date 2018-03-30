import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import netAttendance from './netAttendance';
import mainTab from './drawerScreens/mainTab';
import timeTable from './drawerScreens/timeTable';
import sam from './drawerScreens/sam';
import drawer from './drawer';
import afterLogin from './afterLogin';
import rating from './drawerScreens/rating';
export function registerScreens()
{
  Navigation.registerComponent('haazri_studentApp.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('haazri_studentApp.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('haazri_studentApp.netAttendance',()=>LoginScreen);
  Navigation.registerComponent('haazri_studentApp.mainTab',()=>mainTab);
  Navigation.registerComponent('haazri_studentApp.drawer',()=>drawer);
  Navigation.registerComponent('haazri_studentApp.afterLogin',()=>afterLogin);
  Navigation.registerComponent('haazri_studentApp.timeTable',()=>timeTable);
  Navigation.registerComponent('haazri_studentApp.sam',()=>sam);
  Navigation.registerComponent('haazri_studentApp.rating',()=>rating);
}
