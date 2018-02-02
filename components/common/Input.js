/**
 * Custom component
 * Input
*/
import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';
 
class Input extends Component {
    render() {
        //[Eric Njanga]
        const backgroundColors = {
            primary: '#1976d2', //blue
            secondary: '#ec407a', //pink
            gray : '#bdbdbd'
        };
        //calculate background color
        // let brightness = (backgroundColors[this.props.brightness]==undefined)?backgroundColors.gray:backgroundColors[this.props.type];

        let styles = { 
            color : '#ffffff',
            fontSize: 16,
            paddingLeft: 15,
            paddingTop: 15,
            paddingBottom: 15 
        }
        if(this.props.borderBottom=='true'){
            styles.borderBottomColor = '#ffffff';
            styles.borderBottomWidth = 1;
        }

        // ...
        return (
            <TextInput style={styles} placeholder={this.props.placeholder} value = { this.props.value } onChangeText = { this.props.onChangeText } underlineColorAndroid={ 'transparent' }  /> 
        );
    }//render
}


export {Input};