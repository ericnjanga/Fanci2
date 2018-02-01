import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './components/LoginScreen';
import TimelineScreen from './components/TimelineScreen';
import ProfileScreen from './components/ProfileScreen'

export const Fanci = StackNavigator({
  Login : { screen : LoginScreen,navigationOptions: {  header: null } },
  ProfileScreen : { screen : ProfileScreen},
  TimeLine: { screen: TimelineScreen },
});
export default class App extends Component {
  render() {
    return <Fanci />;
  }
}