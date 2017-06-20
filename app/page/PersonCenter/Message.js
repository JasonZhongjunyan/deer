/**
 * Created by Jason钟 on 2017/6/14.
 */
import React, { Component } from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,TextInput,Dimensions} from 'react-native';
import Header from '../../components/Header';
import Camera from 'react-native-camera';
const {width,height} = Dimensions.get('window');

export default class Message extends Component {
    constructor(props){
        super(props);
    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Header title='留言板'/>
                {/*<Camera*/}
                    {/*ref={(cam) => {*/}
                        {/*this.camera = cam;*/}
                    {/*}}*/}
                    {/*style={styles.preview}*/}
                    {/*aspect={Camera.constants.Aspect.fill}>*/}
                    {/*<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>*/}
                {/*</Camera>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: height,
        width: width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});