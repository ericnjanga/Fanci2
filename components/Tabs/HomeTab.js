import React,{Component} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: '95%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
class HomeTab extends Component {
    render(){
        const { region } = this.props;
            //console.log(region);
        return (
            <View style ={styles.container}>
                <Text style={{margin:20}}>HOME</Text>
                
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >
                </MapView>
                
            </View>
            )
    }
};
export {HomeTab};