import React from 'react'
import { StyleSheet, View, NavigatorIOS, Text, Image, Button } from 'react-native'
import {FileSystem } from 'expo';

export default class extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.fishId}</Text>
        <View style={styles.pictureWrapper}>
          <Image
            style={styles.picture}
            source={{
              uri: `${FileSystem.documentDirectory}photos/${this.props.photo}`
            }} />
        </View>
        <Text style={styles.desc}>{this.props.desc}</Text>
      </View>
    )
  }
}

const pictureSize = 350

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 30
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
  },
  desc: {
    margin: 30,
    fontSize: 15
  }
})
