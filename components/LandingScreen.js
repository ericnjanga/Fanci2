import React,{Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { SocialIcon, Button } from 'react-native-elements';

 

//[Eric Njanga]
const bgImageSource = { 
    uri: 'https://images.unsplash.com/photo-1461720486092-b6ee3f33d726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f39bebda049d7d7dc0d96b7b2a59975&auto=format&fit=crop&w=634&q=80'
};
const logoImg = {
    uri : 'https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg'
};
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

 
class LandingScreen extends Component{
    static navigationOptions = {
        title: 'Login',
        navigatationBarHidden:true
    };
    loginPress(){
      this.props.navigation.navigate("Login");  
    }
    registerPress(){
        this.props.navigation.navigate("Register");  
    }
    render() {
        return (
            <View style={viewStyles.view}>
                <Image style={viewStyles.logoImg} source={logoImg} />
                <View style={viewStyles.logo}>
                    <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
                        Welcome to Airbnb
                    </Text>
                    <TouchableOpacity style={{marginTop:30}} onPress={this.loginPress.bind(this)}> 
                       <Text style={{fontSize:20,backgroundColor:'#fff'}}>Login </Text> 
                    </TouchableOpacity>
                </View>
                
                <View style={viewStyles.loginPanel}> 
                   <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    />
                    <SocialIcon
                    title='Create Account'
                    button
                    light
                    onPress = {this.registerPress.bind(this)}
                    />
                    <TouchableOpacity> 
                       <Text> More Options </Text> 
                    </TouchableOpacity>
                    
                </View>


                
                 
                <Image style={viewStyles.backgroundImage} source={bgImageSource} />

            </View>
        
        )
    }
}
const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        margin: 7
    }
}

//[Eric Njanga] 
const viewStyles = StyleSheet.create({
    view: {  
        flex: 1 
    },
    logoImg:{
        height : 50,
        width : 50,
        marginTop:50
        
    },
    logo: {
        position: 'absolute',
        top: 50,
        start: 40,
        end: 40,
        backgroundColor: '#999',
        zIndex: 10
    },
    button: {
        height: 140
    },
    loginPanel: {
        position: 'absolute',
        // left: 20,
        /*Start - controls the distance a child’s start edge is from the parent’s start edge
        End - controls the distance a child’s end edge is from the parent’s end edge*/
        top: 150,
        start: 20,
        end: 20,
        flex: 1,
        // borderColor: 'red',
        // borderStyle: 'dashed',
        // borderWidth: 5,
        zIndex: 10
    },
    backgroundImage: {
        flex: 1, 
        // top:0,  
        zIndex: 1, 
        resizeMode: 'cover'
    }
});
export default LandingScreen;