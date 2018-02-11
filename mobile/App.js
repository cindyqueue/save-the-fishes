import React from 'react'
import { StyleSheet, View, NavigatorIOS, Text, Image } from 'react-native'
import {FileSystem } from 'expo';
import AppContainer from './containers/AppContainer'
import CameraContainer from './containers/CameraContainer'
import SelectedPhoto from './components/SelectedPhoto'
import IdFish from './components/IdFish'

const DESC = "Morone americana (white perch) is found along the Atlantic coast area of the Nearctic region, ranging from the coastal areas of New Jersey as far south as South Carolina. The species has been introduced into inland bodies of water in New England and some of Nebraska’s waters as well as Lakes Ontario and Erie."

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
      size: '',
      location: '',
      showCamera: false,
      selectedPhotos: [],
      showSelected: false,
      scene1: true
    }
    this.toggleCamera = this.toggleCamera.bind(this)
    this.selectedPhoto = this.selectedPhoto.bind(this)
    this.idFish = this.idFish.bind(this)
  }

  toggleCamera() {
    this.setState({ showCamera: !this.state.showCamera })
  }

  selectedPhoto(photoUris) {
    this.setState({
      selectedPhotos: photoUris,
      scene1: false,
      scene2: true
    })
  }

  idFish() {
    this.setState({
      scene1: false,
      scene2: false
    })
  }

  render () {
    var content = <View></View>
    if (this.state.scene1 && !this.state.showCamera) {
      content =  <AppContainer cameraOn={this.toggleCamera}/>
    } else if (this.state.scene1 && this.state.showCamera) {
      content =  <CameraContainer cameraOff={this.toggleCamera} selectedPhoto={this.selectedPhoto}/>
    } else if (!this.state.scene1 && this.state.scene2) {
      content =  <SelectedPhoto photos={this.state.selectedPhotos} idFish={this.idFish} />
    } else if (!this.state.scene1 && !this.state.scene2) {
      content = <IdFish photo={this.state.selectedPhotos[0]} fishId='Morone americana' desc={DESC}/>
    }
    return (
      <View style={styles.container}>
        {
          content
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  selected: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
