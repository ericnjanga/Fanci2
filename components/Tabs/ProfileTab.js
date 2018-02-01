import React,{Component} from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import firebase from 'firebase';
class ProfileTab  extends Component {
  state = {userData : null};
  componentWillMount(){
    this.getUserData();
    console.log(this.props.navData);
  }
  logOut(){
    //firebase.auth().signOut();
    //this.props.navData.navigate("Login");
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
    render(){
            return (
                <View>
                    <Text>
                        ProfileTab
                    </Text>
                    <Text style={{fontSize:12,margin:20}}>
                       {this.state.userData}
                    </Text>
                    <Button style={{margin:20}} onPress={this.logOut.bind(this)} title="Log Out"/>
                </View>
                )
            }
};
export {ProfileTab};