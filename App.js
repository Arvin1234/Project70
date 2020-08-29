import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
    return (
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
    );
    <TextInput style = {styles.titleBox}/>
    <TextInput style = {styles.authorBox}/>
    <TextInput style = {styles.writeBox}/>
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},
  Read: {screen: ReadtoryScreen},
}

const  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  authorBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  writeBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
});

const AppContainer =  createAppContainer(TabNavigator);