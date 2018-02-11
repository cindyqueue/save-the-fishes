import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView, TouchableHighlight, Button } from 'react-native'
import { FileSystem } from 'expo'

const pictureSize = 150

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
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.backButton} onPress={this.props.onPress}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => this.props.next(this.state.selectedPhoto)}>
            <Text style={styles.nextText}>Next</Text>
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
                <Button color='white'
                  onPress={() => this.setState({selectedPhoto: [...this.state.selectedPhoto, photoUri]})}
                  title={this.state.selectedPhoto.includes(photoUri) ? "Selected" : "Select"}></Button>
              </View>
            ))}
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'beige'
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
  },
  pictureWrapper: {
    width: pictureSize,
    height: pictureSize,
    margin: 5,
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
  },
  backButton: {
    flex: 2,
    padding: 20,
    marginBottom: 4,
    backgroundColor: 'skyblue',
    height: 50
  },
  nextButton: {
    flex: 2,
    padding: 20,
    marginRight: 0,
    marginBottom: 4,
    backgroundColor: 'skyblue',
    height: 50
  },
  nextText: {
    alignSelf: 'flex-end'
  }
});
