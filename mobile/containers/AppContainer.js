import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import FishForm from '../components/FishForm'

const pictureSize = 100;

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
      <View style={{flex: 1}}>
        <Image
          style={{resizeMode: 'cover', width: '100%', height: '100%', flex: 1, position: 'absolute'}}
          source={require('../images/bg.png')} />
        <View style={styles.container}>
        <View style={styles.pictureWrapperTitle}>
          <Image
            style={styles.pictureTitle}
            source={require('../images/title.gif')} />
        </View>
        <View style={styles.pictureWrapper}>
          <Image
            style={styles.picture}
            source={require('../images/fish.gif')} />
        </View>
        <View style={styles.buttonContainer}>
          <Text
            style={styles.button}
            onPress={this.props.cameraOn} >
            ID FISH
          </Text>
        </View>
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
  picture: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  pictureWrapper: {
    margin: 15,
    marginTop: 5
  },
  pictureTitle: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  pictureWrapperTitle: {
    margin: 0,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#f9e33a',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,
    margin: 20,
    borderColor: 'black',
    borderRadius: 5
  },
  button: {
    color: '#2f3192',
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
