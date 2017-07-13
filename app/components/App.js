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
import Home from '../page/Home';
import Movies from '../page/Movies';
import Version from '../page/PersonCenter/Version';
import PersonCenter from '../page/PersonCenter/PersonCenter';
import ResetPassword from '../page/PersonCenter/ResetPassword';
import Message from '../page/PersonCenter/Message';
import Scan from '../page/Scan';
import Test from '../page/Test';
import Share from '../page/Share';
import DongHua from '../page/DongHua';

export default class App extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <DongHua/>
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