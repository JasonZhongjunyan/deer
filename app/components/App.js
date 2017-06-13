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
import Movies from '../../app/page/Movies'
import Version from '../../app/page/PersonCenter/Version'
import PersonCenter from '../../app/page/PersonCenter/PersonCenter'
import ResetPassword from '../../app/page/PersonCenter/ResetPassword'

export default class App extends Component {
    constructor(props){
        super(props);
    }




    render() {
        return (
            <ResetPassword/>
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