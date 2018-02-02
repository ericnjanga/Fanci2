import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation';

import LandingScreen from './components/LandingScreen';
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';
import TimelineScreen from './components/TimelineScreen';
import ProfileScreen from './components/ProfileScreen'

export const Fanci = StackNavigator({
  // Landing : { screen : LandingScreen,navigationOptions: {  header: null } },
  Register : { screen : RegisterScreen,navigationOptions: {  header: null } },  
  Login : { screen : LoginScreen,navigationOptions: {  header: null } },  
  ProfileScreen : { screen : ProfileScreen},
  TimeLine: { screen: TimelineScreen },
});
export default class App extends Component {
  render() {
    return <Fanci />;
  }
}