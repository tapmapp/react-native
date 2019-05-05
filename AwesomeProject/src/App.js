import React, {Component} from 'react';
import {Button, Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';

import Login from './components/Login';
import { connect } from 'react-redux';
//import Pots from './components/Pots';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/img/getapot-icon.png')} style={styles.logo}/>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f6eb',
  },
  logo: {
    height: 75,
    width: '70%',
    marginBottom: 30
  },
  button: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor: 'blue',
  },
});



export default App;