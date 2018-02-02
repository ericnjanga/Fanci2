/**
 * Custom component
 * Background Image
*/
import React, { Component } from 'react';
import { Image } from 'react-native';
 
class BackgroundImage extends Component {
    render() {
        //[Eric Njanga]
        const source = {  
            uri: 'https://images.unsplash.com/photo-1517285976756-6447388e64f9?ixlib=rb-0.3.5&s=bfd1766cfc00562dea40e76b7eb8922c&auto=format&fit=crop&w=634&q=80'
        }; 
        const styles = {  
            flex: 1,  
            zIndex: 1, 
            resizeMode: 'cover' 
        }  
        // ...
        return (
            <Image style={styles} source={source} /> 
        );
    }//render
}


export {BackgroundImage};