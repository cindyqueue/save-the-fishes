import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import FishForm from '../components/FishForm'

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
        <Text style={styles.header}>Who's That Fish?</Text>
        <View style={styles.buttonContainer}>
          <Text
            style={styles.button}
            onPress={this.props.cameraOn} >
            ID FISH
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,
    margin: 20
  },
  button: {
    color: '#ffffff',
    fontSize: 20,

    fontWeight: 'bold'
  },
  flipButton: {
    flex: 0.3,
    height: 10,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  }
});

// TO TOGGLE FORM:
{/* <Button
  title='Add more info'
  onPress={() => this.setState({showForm: !this.state.showForm})} />
  {
    this.state.showForm
    ? <FishForm />
    : <View />
  } */}
