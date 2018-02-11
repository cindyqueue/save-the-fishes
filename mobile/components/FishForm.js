import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class FishForm extends React.Component {
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
      <View>
        <Text>Size (cm)</Text>
        <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({size: text})}
          value={this.state.size}
        />
        <Text>Location</Text>
        <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({location: text})}
          value={this.state.location}
        />
      </View>
    );
  }
}
