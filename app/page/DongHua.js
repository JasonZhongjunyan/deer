/**
 * Created by Jason钟 on 2017/7/13.
 */
import React, { Component } from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,TextInput,Dimensions,Share,Animated} from 'react-native';
import Header from '../components/Header';
import FadeInView from '../components/FadeInView';
const {width,height} = Dimensions.get('window');

export default class DongHua extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Header title="动画"/>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}

