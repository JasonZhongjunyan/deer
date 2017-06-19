/**
 * Created by Jason钟 on 2017/6/14.
 */
import React, { Component } from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import Header from '../../components/Header';

export default class Message extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Header title='留言评论'/>
                <View>
                    <Text>sdfsajlfjds</Text>
                    <Text>sdfsajlfjds</Text>
                    <Text>sdfsajlfjds</Text>
                    <Text>sdfsajlfjds</Text>
                </View>
            </View>
        )
    }
}