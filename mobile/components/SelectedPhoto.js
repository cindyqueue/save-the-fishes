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
            source={{
              uri: `${FileSystem.documentDirectory}photos/${this.props.photos[0]}`
            }} />
        </View>
        {
          this.state.showForm
          ? <FishForm />
          : <Button title="Add more info" color='white' onPress={() => this.setState({showForm: true})} />
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
    </View>
    )

  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  pictureTitle: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  pictureWrapperTitle: {
    margin: 0,
    marginBottom: -20
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
  }
})
