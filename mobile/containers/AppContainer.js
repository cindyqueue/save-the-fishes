import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FishForm from '../components/FishForm';

export default class AppContainer extends React.Component {
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
      <View style={styles.container}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}
          >Who's That Fish?</Text>
        <Button
          title='Add more info'
          onPress={() => this.setState({showForm: !this.state.showForm})} />
          {
            this.state.showForm
            ? <FishForm />
            : <View />
          }

        <Button
          title='Id Fish'
          color="#841584"
          onPress={() => console.log('SIZE', this.state.size, 'LOCATION', this.state.location)}/>
      </View>
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
