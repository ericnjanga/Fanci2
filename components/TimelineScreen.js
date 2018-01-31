import React,{Component} from 'react';
import { StyleSheet,Text, View, Button, AsyncStorage } from 'react-native';
import firebase from 'firebase';

class TimelineScreen extends Component {
  static navigationOptions = {
    title: 'TimeLine',
  };
  state = {userData : null};
  componentWillMount(){
    this.getUserData();
  }
  logOut(){
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  }
  goToHome(){
    this.props.navigation.navigate("Home");
  }
  getUserData(){
    try {
          const value = AsyncStorage.getItem('userData');
          if (value !== null){
            value.then(function(res){
              this.setState ({userData : res});
            },function(es){
              console.log(es)
            });
            
          }
          else
          { 
            this.logOut()
            
          }
        } 
    catch (error) {
            this.logOut();
            
        }
  }
  render() {
    
    return (
      <View  style={styles.container}>
        <Text style={{fontSize:12,margin:20}}>
          Time Line 
        </Text>
        <Text style={{fontSize:12,margin:20}}>
          {this.state.userData}
        </Text>
        
        <Button onPress={this.goToHome.bind(this)} title="Home"/>

        <Button onPress={this.logOut.bind(this)} title="Log Out"/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 12,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    
  }
});
export default TimelineScreen;