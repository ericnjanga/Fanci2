import React,{Component} from 'react';
import {Text, ScrollView, TextInput, View, Button,TouchableOpacity,AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { Card, Spinner } from './common';



class LoginScreen extends Component{
    static navigationOptions = {
        title: 'Login',
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
        
        // Sign in using a popup.
        //firebase.app();
            firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                   this.setState({loggedin :true,userData:user.providerData[0]}); 
                   this.goToHomePage();
                }
                else{
                    this.setState({loggedin :false});
                    console.log("FALSE")
                    //this.props.navigation.navigate("Login");
                }
            });
    }
    goToHomePage(){        
                    try {
                        AsyncStorage.setItem('userData', JSON.stringify(this.state.userData));
                        this.props.navigation.navigate("TimeLine");
                        } 
                    catch (error) {
                        console.log('Some Error',error);
                        }
    }
    onButtonPress = () => {
        console.log("Click");
        const { email, password } = this.state;
        this.setState({ 'err': '', loading: true });
        if(this.state.loginPage)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                this.onLoginFail.bind(this);
            });
        else
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
        return (
            <View>
                <Card>
                <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    {this.state.pageText}
                </Text>
                <TouchableOpacity onPress={this.registerPress.bind(this)}
                      disabled={this.state.loading}  > 
                    <Text style={{fontSize: 17,left:300}}>
                     Go to {this.state.pageText == "Register" ? "Login" : "Register"} 
                    </Text>
                </TouchableOpacity>   
                <TextInput placeholder='email' value = { this.state.email } onChangeText = { email => this.setState({email}) }   />
                <TextInput secureTextEntry placeholder='password'  value = { this.state.password } onChangeText = { password => this.setState({password}) }/>  
                    <Text
                            style={{fontSize: 14, color: 'red', padding: 5}}>
                            {this.state.err}
                        </Text>
                <Button 
                        disabled={this.state.loading}
                        onPress={this.onButtonPress.bind(this)}
                        title={this.state.pageText}
                    />
                { this.state.loading && <Spinner />}
                </ScrollView>
                </Card>
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


export default LoginScreen;
// react-native run-android