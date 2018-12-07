import React from 'react';
import { StyleSheet, SectionList, Text, View, TextInput } from 'react-native';
// import {RNCamera} from 'react-native-camera';
import { Toolbar } from 'react-native-material-ui';

export default class CameraCapture extends React.Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null
  }
  render() {
    return(
      <View>
        <Text style={styles.temp}>HI</Text>
      </View>)
  }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <RNCamera
  //           ref={ref => {
  //             this.camera = ref;
  //           }}
  //           style = {styles.preview}
  //           type={RNCamera.Constants.Type.back}
  //           flashMode={RNCamera.Constants.FlashMode.on}
  //           permissionDialogTitle={'Permission to use camera'}
  //           permissionDialogMessage={'We need your permission to use your camera phone'}
  //       />
  //       <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
  //       <TouchableOpacity
  //           onPress={this.takePicture.bind(this)}
  //           style = {styles.capture}
  //       >
  //           <Text style={{fontSize: 14}}> SNAP </Text>
  //       </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // }

//   takePicture = async function() {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await this.camera.takePictureAsync(options)
//       console.log(data.uri);
//     }
//   };
}

const styles = StyleSheet.create({
  temp: {
    fontSize: 40
  }
});

