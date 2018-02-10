import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AppContainer from './containers/AppContainer';
import { Navigator, NativeModules } from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      size: '',
      location: ''
    }
  }
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
