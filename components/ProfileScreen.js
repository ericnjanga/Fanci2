import React,{Component}  from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { HomeTab, ProfileTab, TimelineTab }  from './Tabs';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const Home =  () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]}><HomeTab /></View>;
const TimeLine = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]}><TimelineTab /></View>;
const Profile = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]}><ProfileTab /></View>;


class ProfileScreen extends Component {
HomeIcon = ()=> { <FontAwesome>{Icons.chevronLeft}</FontAwesome>;}
state = {
        index: 0,
        headText : 'Home...',
        routes: [
        { key: 'Home', title: 'Home' },
        { key: 'TimeLine', title: 'TimeLine' },
        { key: 'Profile', title: 'Profile' },
        ],
    };

setHeadText(req){
    //console.log(this)
    /*navigationOptions ={
        title: this.state.routes[req].title,
    };*/
}
static navigationOptions = ({ navigation }) => ({
    title:  'HOME...',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
    headerStyle:{backgroundColor:'white'},
    headerLeft : null
});
_handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    Home: Home,
    TimeLine: TimeLine,
    Profile : Profile
  });

  render() {
    this.setHeadText(this.state.index);
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ProfileScreen;