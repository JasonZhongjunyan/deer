/**
 * Created by Jason钟 on 2017/6/14.
 */
import React, { Component } from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import Header from '../../components/Header';
import Camera from 'react-native-camera';

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state={
            camera: {
                aspect: Camera.constants.Aspect.fill,
                captureTarget: Camera.constants.CaptureTarget.cameraRoll,
                type: Camera.constants.Type.back,
                orientation: Camera.constants.Orientation.auto,
                flashMode: Camera.constants.FlashMode.auto,
            }
        }

    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render(){
        return (
            <View>
                <Header title='扫一扫'/>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    aspect={this.state.camera.aspect}
                    captureTarget={this.state.camera.captureTarget}
                    type={this.state.camera.type}
                    flashMode={this.state.camera.flashMode}
                    defaultTouchToFocus
                    mirrorImage={false}  >
                    <Text onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        )
    }
}