import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello, TimeLine!</Text>
        <Button style={{flex:1}}
          onPress={() => navigate('TimeLine')}
          title="Timline"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default HomeScreen;