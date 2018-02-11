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
        <Text style={{fontSize: 20, color: '#2f3192'}}>Size (cm)</Text>
        <TextInput
          style={{height: 40, width:200, borderColor: '#2f3192', borderWidth: 1, backgroundColor: 'white'}}
          onChangeText={(text) => this.setState({size: text})}
          value={this.state.size}
        />
        <Text style={{fontSize: 20, color: '#2f3192'}}>Location</Text>
        <TextInput
          style={{height: 40, width:200, borderColor: '#2f3192', borderWidth: 1, backgroundColor: 'white'}}
          onChangeText={(text) => this.setState({location: text})}
          value={this.state.location}
        />
      </View>
    );
  }
}
