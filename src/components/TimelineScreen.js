import React,{Component} from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import firebase from 'firebase';

class TimelineScreen extends Component {
  static navigationOptions = {
    title: 'Time Line',
  };
  logOut(){
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View  style={styles.container}>
        <Text style={{fontSize:12}}>Time Line</Text>
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