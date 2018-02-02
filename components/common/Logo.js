/**
 * Custom component
 * Logo
*/
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
 
class Logo extends Component {
    render() {
        //[Eric Njanga] 
        let styles = {};
        if(this.props.location=='top-center') {
            styles = {   
                position: 'absolute',
                top: 50,
                start: 60,
                end: 60,
                // backgroundColor: '#999',
                zIndex: 10 
            }
        }
         
        // ...
        return (
            <View style={styles}>
                <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center', color:'#ffffff' }}>Fanci</Text>
            </View>
        );
    }//render
}


export {Logo};