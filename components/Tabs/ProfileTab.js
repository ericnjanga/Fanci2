import React,{Component} from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';
import { Card, ListItem, Button,Avatar } from 'react-native-elements'
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
      const users = [
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
         // more users here
        ]
            return (
                <View>
                    <Text>
                        ProfileTab
                    </Text>
                    <Text style={{fontSize:12,margin:20}}>
                       {this.state.userData}
                    </Text>
                    <Button style={{margin:20}} onPress={this.logOut.bind(this)} title="Log Out"/>
                    <Card title="CARD WITH DIVIDER">
                      {
                        users.map((u, i) => {
                          return (
                            <View key={i} style={{}}>
                              <Avatar
                                  small
                                  rounded
                                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                                  onPress={() => console.log("Works!")}
                                  activeOpacity={0.7}
                                />
                              
                              <Text style={{}}>{u.name}</Text>
                            </View>
                          );
                        })
                      }
                    </Card>
                </View>
                )
            }
};
export {ProfileTab};