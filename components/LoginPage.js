import React,{Component } from 'react';


export default function LoginPage(){
    return(
        <Card>
                <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TouchableOpacity onPress={this.registerPress.bind(this)}> 
                    <Text style={{fontSize: 17,left:200}}>
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
    )
}