/**
 * Custom component
 * BUTTON
*/
import React, { Component } from 'react';
import { TouchableOpacity,Text } from 'react-native';
 
class Button extends Component {
    render() {
        //[Eric Njanga]
        const backgroundColors = {
            primary: '#1976d2', //blue
            secondary: '#ec407a', //pink
            gray : '#bdbdbd'
        };
        //calculate background color
        let bgCol = (backgroundColors[this.props.type]==undefined)?backgroundColors.gray:backgroundColors[this.props.type];

        const styles = {
            textStyle :{
                alignSelf : 'center',
                color : '#ffffff',
                fontSize : 16,
                fontWeight : '600' 
            },
            buttonStyle : { 
                height: 50, 
                justifyContent: 'center', 
                alignItems:'center', 
                borderRadius:4, 
                borderRadius : 5,
                backgroundColor: bgCol 
            }
        }

        // ...
        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
                <Text style = {styles.textStyle}>
                    {this.props.children} 
                </Text>
            </TouchableOpacity>  
        );
    }//render
}


export {Button};