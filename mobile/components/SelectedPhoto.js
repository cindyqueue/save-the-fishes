import React from 'react'
import { StyleSheet, View, NavigatorIOS, Text, Image, Button } from 'react-native'
import {FileSystem } from 'expo';
import FishForm from './FishForm.js'

const pictureSize = 350


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fishId: '',
      showId: false,
      showForm: false
    }
    this.idFish = this.idFish.bind(this)
  }

  idFish() {
    this.setState({
      fishId: 'goldfish',
      showId: true
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Who's That Fish?</Text>
        <View style={styles.pictureWrapper}>
          <Image
            style={styles.picture}
            source={{
              uri: `${FileSystem.documentDirectory}photos/${this.props.photos[0]}`
            }} />
        </View>
        {
          this.state.showForm
          ? <FishForm />
          : <Button title="Add more info" onPress={() => this.setState({showForm: true})} />
        }
        <View style={styles.buttonContainer}>
          <Text
            style={styles.button}
            onPress={this.props.idFish} >
            ID FISH
          </Text>
        </View>
        {
          this.state.showId
          ? <Text>{this.state.fishId}</Text>
          : null
        }
      </View>
    )

  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  pictureWrapper: {
    width: pictureSize,
    height: pictureSize,
    margin: 5,
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
  }
})
