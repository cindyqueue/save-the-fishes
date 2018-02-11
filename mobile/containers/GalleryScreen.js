import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView, TouchableHighlight, Button } from 'react-native'
import { FileSystem } from 'expo'

const pictureSize = 250

export default class GalleryScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photos: [],
      selectedPhoto: []
    }
  }

  componentDidMount () {
    // FileSystem.deleteAsync(FileSystem.documentDirectory + 'photos')
    FileSystem.readDirectoryAsync(FileSystem.documentDirectory + 'photos').then(photos => {
      this.setState(
        {
          photos
        }
      )
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{resizeMode: 'cover', width: '100%', height: '100%', flex: 1, position: 'absolute'}}
          source={require('../images/bg.png')} />
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.backButton} onPress={this.props.onPress}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => this.props.next(this.state.selectedPhoto)}>
            {
              this.state.selectedPhoto.length
              ? <Text style={styles.nextText}>Next</Text>
              : null
            }
          </TouchableOpacity>
      </View>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <View style={styles.pictures}>
            {this.state.photos.map(photoUri => (
              <View style={styles.pictureWrapper} key={photoUri} >
                <Image
                  key={photoUri}
                  style={styles.picture}
                  source={{
                    uri: `${FileSystem.documentDirectory}photos/${photoUri}`
                  }}
                />
                <Button color='#eb2b2e'
                  onPress={() => this.setState({selectedPhoto: [...this.state.selectedPhoto, photoUri]})}
                  title={this.state.selectedPhoto.includes(photoUri) ? "Selected" : "Select"}></Button>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
    borderRadius: 5
  },
  pictureWrapper: {
    width: pictureSize,
    height: pictureSize,
    margin: 5,
    borderRadius: 5
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 2,
    fontSize: 10,
    backgroundColor: 'transparent',
  },
  nav: {
    flexDirection: 'row',
    marginBottom: 10
  },
  backButton: {
    flex: 2,
    padding: 20,
    marginBottom: 4,
    height: 50
  },
  nextButton: {
    flex: 2,
    padding: 20,
    marginRight: 0,
    marginBottom: 4,
    height: 50
  },
  nextText: {
    alignSelf: 'flex-end',
    color: '#f9e33a',
    fontWeight: 'bold',
    fontSize: 25
  },
  backText: {
    color: '#f9e33a',
    fontWeight: 'bold',
    fontSize: 25
  }

});
