import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
registerScreens();
Navigation.startSingleScreenApp
({
screen:{
  screen:'haazri_studentApp.upload',
},
drawer: {
            left: {
                screen: 'haazri_studentApp.drawer',
            }
      }
});
