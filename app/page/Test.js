/**
 * Created by Jason钟 on 2017/6/20.
 */
import React, { Component } from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,TextInput,Dimensions,Platform,AsyncStorage,InteractionManager} from 'react-native';
import Header from '../components/Header';
const {width,height} = Dimensions.get('window');
import BarcodeScanner from 'react-native-barcode-scanner-universal'
var a = '';

export default class Scan extends Component {
    constructor(props){
        super(props);
        this.state = {
            tip :''
        }
    }

    componentWillMount() {
        AsyncStorage.setItem('tip','first', function(errs){
            if(errs){
                console.log(errs);
                return;
            }
            console.log('数据保存成功!');
        });
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            AsyncStorage.getItem('tip',function(errs,result){
                if(errs){
                    return
                }
                console.log('ddsfksahfdsahfksa');
                console.log(result);
                return a = result;
            });
            this.setState({
                tip: a
            });
            console.log(this.state.tip +"dddssssssssss");
        });


    }

    render(){
        return (
            <View style={{flex:1}}>
                <Header title='扫一扫' rightView={<Text style={{color:'#FFF'}}>手动</Text>}/>
                <Text>{this.state.tip}</Text>
                {
                    this.state.tip === 'first' ? <Text>新功能</Text> : <Text>haha</Text>
                }
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