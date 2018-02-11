import React from 'react'
import { StyleSheet, View, NavigatorIOS, Text, Image, Button, TouchableOpacity } from 'react-native'
import {FileSystem } from 'expo';

export default class extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{resizeMode: 'cover', width: '100%', height: '100%', flex: 1, position: 'absolute'}}
          source={require('../images/bg.png')} />
        <View style={styles.container}>
          <TouchableOpacity style={styles.home} onPress={this.props.goHome}>
            <Text style={{color:'white', fontSize: 15}}>Home</Text>
          </TouchableOpacity>
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
      </View>

    )
  }
}

const pictureSize = 350

const styles = StyleSheet.create({
  home: {
    alignSelf: 'flex-start',
    marginBottom: 30,
    marginLeft: 10
  },
  backButton: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    height: 10,
    width: '100%'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 0,
    color: '#f9e33a',
    fontStyle: 'italic'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
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
    fontSize: 15,
    color: 'black',
    backgroundColor: 'lightgray',
    padding: 15
  }
})
