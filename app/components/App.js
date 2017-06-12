/**
 * Created by Jason钟 on 2017/6/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Home from '../../app/page/Home'
import PersonCenter from '../../app/page/PersonCenter/PersonCenter'

export default class App extends Component {
    constructor(props){
        super(props);
    }




    render() {
        return (
            <Home/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});