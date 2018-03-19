import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
export function registerScreens()
{
  Navigation.registerComponent('studentApp.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('studentApp.LoginScreen',()=>LoginScreen);
}
