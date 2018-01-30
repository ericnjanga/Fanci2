import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import TimelineScreen from './components/TimelineScreen';
import RegisterScreen from './components/RegisterScreen'

export const Fanci = StackNavigator({
  Login : { screen : LoginScreen,navigationOptions: {  header: null } },
  Register : { screen : RegisterScreen,navigationOptions: {  header: null }},
  Home: { screen: HomeScreen },
  TimeLine: { screen: TimelineScreen },
});
export default class App extends Component {
  render() {
    return <Fanci />;
  }
}

