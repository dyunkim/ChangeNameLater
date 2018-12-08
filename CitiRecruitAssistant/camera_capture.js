import React from 'react';
import { TouchableOpacity, StyleSheet, SectionList, Text, View, TextInput } from 'react-native';
import {RNCamera} from 'react-native-camera';
import { Toolbar } from 'react-native-material-ui';

export default class CameraCapture extends React.Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null
  }
  // render() {
  //   return(
  //     <View>
  //       <Text style={styles.temp}>HIii</Text>
  //     </View>)
  // }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      const form_data = new FormData();
      url = "http://localhost:5000/processPicture"
      form_data.append('photo', {
        uri: data.uri,
        type: 'image/jpeg', // or photo.type
        name: 'profilePic'
      });
      fetch(url, {
        method: 'post',
        body: form_data
      }).then(res => {
        console.log(res)
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});


