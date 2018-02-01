import React,{Component} from 'react';
import {Text, ScrollView, TextInput, View, Image, StyleSheet, Button,TouchableOpacity,AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { Card, Spinner } from './common';
import { List, ListItem } from 'react-native-elements';

 

//[Eric Njanga]
const bgImageSource = { 
    uri: 'https://images.unsplash.com/photo-1461720486092-b6ee3f33d726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f39bebda049d7d7dc0d96b7b2a59975&auto=format&fit=crop&w=634&q=80'
};



 
class RegisterScreen extends Component{
    static navigationOptions = {
        title: 'Register',
        navigatationBarHidden:true
    };
    state = { loggedin :false,loginPage:true,pageText:'Login',userData:null, email: 'sonydaman@gmail.com', password: 'sony7000', err: '', loading: false};
    
    componentWillMount(){
        if (!firebase.apps.length) 
            firebase.initializeApp({
                apiKey: "AIzaSyCCH3Bvo83MjSOXwtVhTzJqT6Z_50146jc",
                authDomain: "api-project-842404858396.firebaseapp.com",
                databaseURL: "https://api-project-842404858396.firebaseio.com",
                projectId: "api-project-842404858396",
                storageBucket: "api-project-842404858396.appspot.com",
                messagingSenderId: "842404858396"
            });
        
          /*  firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                   this.setState({loggedin :true,userData:user.providerData[0]}); 
                   this.goToHomePage();
                }
                else{
                    this.setState({loggedin :false});
                    console.log("FALSE")
                    //this.props.navigation.navigate("Login");
                }
            });*/
    }
    goToHomePage(){        
                    try {
                        AsyncStorage.setItem('userData', JSON.stringify(this.state.userData));
                        this.props.navigation.navigate("ProfileScreen");
                        } 
                    catch (error) {
                        console.log('Some Error',error);
                        }
    }
    onButtonPress = () => {
        console.log("Click");
        const { email, password } = this.state;
        this.setState({ 'err': '', loading: true });
        firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))     
    }
    onLoginFail() {
        this.setState({ 'err': 'Authention failed', loading: false, });
    }
    
    onLoginSuccess(res) {
        this.setState({
            'err': '',
            loading: false,
            email: '',
            password: '',
            loggedin :true,userData:res.providerData[0]
        });
        this.goToHomePage();
    }
    registerPress(){
        if(this.state.loginPage)
            this.setState({pageText : 'Register' , loginPage : false});
        else
            this.setState({pageText : 'Login' , loginPage : true});
    }

    render() {
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
        return (
            <View style={viewStyles.view}>

                <View style={viewStyles.logo}>
                    <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>Fanci</Text>
                </View>

                <View style={viewStyles.loginPanel}> 
                    <Text style={{fontSize: 27}}>
                        Register
                    </Text>
                    <TouchableOpacity onPress={this.registerPress.bind(this)} disabled={this.state.loading}> 
                        
                    </TouchableOpacity>   
                    <TextInput placeholder='email' value = { this.state.email } onChangeText = { email => this.setState({email}) }   />
                    <TextInput secureTextEntry placeholder='password'  value = { this.state.password } onChangeText = { password => this.setState({password}) }/>  
                        <Text
                                style={{fontSize: 14, color: 'red', padding: 5}}>
                                {this.state.err}
                            </Text>
                    <Button style={viewStyles.button} disabled={this.state.loading}
                            onPress={this.onButtonPress.bind(this)}
                            title={this.state.pageText} />
                    { this.state.loading && <Spinner />}
                     <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((l, i) => (
                        <ListItem
                            roundAvatar
                            avatar={{uri:l.avatar_url}}
                            key={i}
                            title={l.name}
                        />
                        ))
                    }
                    </List>
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


export default RegisterScreen;
// react-native run-android