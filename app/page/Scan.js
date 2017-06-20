/**
 * Created by Jason钟 on 2017/6/20.
 */
import React, { Component } from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,TextInput,Dimensions,Platform} from 'react-native';
import Header from '../components/Header';
const {width,height} = Dimensions.get('window');
import BarcodeScanner from 'react-native-barcode-scanner-universal'


export default class Scan extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: "None"
        };
        this._show = this._show.bind(this);
    }

    _show(val) {
        this.setState({
            code:val.data
        })
    }



    manual(){
        console.log("shoudong")
    }

    render(){
        let scanArea = null;
        if (Platform.OS === 'android') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            )
        }

        return (
            <View style={{flex:1}}>
                <Header title='扫一扫' rightView={<Text style={{color:'#FFF'}}>手动</Text>} onRightClick={this.manual.bind(this)}/>
                <Text style={ [{color:"red"},{fontSize:16}] }>{this.state.code}</Text>
                <BarcodeScanner
                    onBarCodeRead={ (code) => this._show(code)}
                    style={styles.camera}>
                    {scanArea}
                </BarcodeScanner>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }
});