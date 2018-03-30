import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
registerScreens();
Navigation.startSingleScreenApp
({
screen:{
  screen:'haazri_studentApp.afterLogin',
},
drawer: {
            left: {
                screen: 'haazri_studentApp.drawer',
            }
      }
});
