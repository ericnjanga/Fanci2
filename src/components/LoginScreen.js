import React,{Component} from 'react';
import {Text, ScrollView, TextInput, View, Button,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { Card, Spinner } from './common';



class LoginScreen extends Component{
    static navigationOptions = {
        title: 'Login',
        navigatationBarHidden:true
    };
    state = { loggedin :false , email: '', password: '', err: '', loading: false};
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
        else
            {
                if(this.state.loggedin)
                    this.props.navigation.navigate("TimeLine");
                else
                    this.props.navigation.navigate("Login");
                firebase.app();
                
            }
        // Sign in using a popup.
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedin :true});
                
            }
            else
                this.setState({loggedin :false})
        });
    }
    
    onButtonPress = () => {
        console.log("Click");
        const { email, password } = this.state;
        this.setState({ 'err': '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                this.onLoginFail.bind(this);
            });
    }
    onLoginFail() {
        console.log("Click");
        this.setState({ 'err': 'Authention failed', loading: false, });
    }
    
    onLoginSuccess(res) {
        console.log(res, "CLICK");
        this.props.navigation.navigate("TimeLine");
        this.setState({
            'err': '',
            loading: false,
            email: '',
            password: ''
        });
    }
    registerPress(){
        console.log("registerPress");
        this.props.navigation.navigate("Register");
        
    }
    
    renderButton() {
        if (this.state.loading) {
            return ( <
                Spinner size = "small" / >
            )
        } else {
            return ( < Button onPress = { this.onButtonPress.bind(this) } title = "Login" > LOGIN </Button>)
        }

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Card>
                <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TouchableOpacity onPress={this.registerPress.bind(this)}> 
                    <Text style={{fontSize: 17,left:300}}>
                     Go to Register
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
                        title="Login"
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