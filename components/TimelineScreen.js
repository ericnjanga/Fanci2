import React,{Component} from 'react';
import { StyleSheet,Text, View, Button, AsyncStorage  } from 'react-native';
import firebase from 'firebase';

class TimelineScreen extends Component {
  static navigationOptions = {
    //title: <Text style={{fontSize:12}}>TimeLine</Text>,
    //headerLeft: <Icon name={'arrow-left'} onPress={ () => {  }} />,
    //headerRight: <Icon name={'cog'} onPress={ () => {  }} />,
    //headerLeft : <Text>LEFT</Text>,
    //headerRight : <Text>RIGHT</Text>,
    title: 'REGISTRATION', // to add letter spacing on Android
    
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
  goToProfile(){
     this.props.navigation.navigate("ProfileScreen");
  }
  getUserData(){
          var that =this;
          const value = AsyncStorage.getItem('userData');
          if (value !== null){
            value.then(function(res){
              that.setState({userData : res});
            },function(es){
              console.log(es)
            });
            
          }
          else
          { 
            this.logOut()
            
          }
         
    
  }
  render() {
    
    return (
      <View  style={styles.container}>
        <Text style={{fontSize:20,margin:20}}>
          Time Line
        </Text>
        <Text style={{fontSize:12,margin:20}}>
          {this.state.userData}
        </Text>
        <Button style={{margin:20}} onPress={this.goToProfile.bind(this)} title="ProfileScreen"/>
        <Button style={{margin:20}} onPress={this.goToHome.bind(this)} title="Home"/>

        <Button style={{margin:20}} onPress={this.logOut.bind(this)} title="Log Out"/>
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