/**
 * Created by Jason钟 on 2017/6/12.
 */
/**
 * Created by Jason钟 on 2017/6/8.
 */
/**
 * Created by Jason钟 on 2017/6/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    SectionList,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from "../components/Header";
import * as Color from '../utils/ColorDefined';
import {pixeled} from "../utils/pixel";
import Classify from "../components/Classify";

var images =[
    '../assets/images/lunbo1.jpg',
    '../assets/images/lunbo2.jpg',
    '../assets/images/lunbo3.jpg',
    '../assets/images/lunbo4.jpg',
];
const {width, height} = Dimensions.get('window');



export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    }



    render() {
        return (
            <View style={{flex: 1,backgroundColor:Color.grayBgColor}}>
                <Header title='首页'/>


            </View>
        );
    }
}

const styles = StyleSheet.create({

});