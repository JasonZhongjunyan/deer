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
    'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',
    'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
    'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
];
const {width, height} = Dimensions.get('window');

var sections = [{
    key: 'haha',
    data:[
        {name:'李庄白肉',image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',time:'32分钟之内送达',price:'起送价:35',sale:"满30减10,满50减15",num:'月售:888'},
        {name:'李庄白肉1',image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',time:'20分钟之内送达',price:'起送价:35',sale:"满30减10,满50减15",num:'月售:777'},
        {name:'李庄白肉2',image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',time:'15分钟之内送达',price:'起送价:35',sale:"满30减10,满50减15",num:'月售:444'},
        {name:'李庄白肉3',image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',time:'30分钟之内送达',price:'起送价:35',sale:"满60省运费",num:'月售:555'},
        {name:'李庄白肉3',image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',time:'30分钟之内送达',price:'起送价:35',sale:"满60省运费",num:'月售:555'},
        {name:'李庄白肉3',image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',time:'30分钟之内送达',price:'起送价:35',sale:"满60省运费",num:'月售:555'},
    ]
}];

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={

        };
        this.renderImg = this.renderImg.bind(this);
        this._renderItem = this._renderItem.bind(this);
    }



    renderImg(){
        let imageViews=[];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1}}
                    source={{uri:images[i]}}
                />
            );
        }
        return imageViews;
    }

    _renderSectionHeader(){
        return(
            <View style={{height:30,justifyContent:'center',borderBottomWidth:pixeled(1),borderBottomColor:Color.defaultBorderColor,alignItems:'center',backgroundColor:Color.writeBgColor,marginTop:5}}>
                <Text style={{color:Color.nineColor,fontSize:10}}>— 猜你喜欢 —</Text>
            </View>
        )
    }

    _renderItem({item}){
        // console.log(item);
        return (
            <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',padding:10,backgroundColor:Color.writeBgColor,borderBottomWidth:pixeled(1),borderBottomColor:Color.defaultBorderColor}}>
                <Image
                    style={{width:80,height:80,marginRight:10}}
                    source={{uri:item.image}}/>
                <View style={{flex:1,flexDirection:"column"}}>
                    <Text style={{fontWeight:'bold',color:Color.threeColor,fontSize:14}}>{item.name}</Text>
                    <Text style={{color:Color.nineColor,marginTop: 5,fontSize:12}}>{item.time}</Text>
                    <Text style={{color:Color.nineColor,marginTop: 5,fontSize:12}}>{item.price}</Text>
                    <View style={{flexDirection:'row',marginTop: 6}}>
                        <Text style={{color:Color.primaryColor,fontSize:11}}>{item.sale}</Text>
                        <Text style={{fontSize:11,color:Color.nineColor,position:'absolute',right:15,}}>{item.num}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex: 1,backgroundColor:Color.grayBgColor}}>
                <Header title='首页'/>
                <Swiper
                    height={100}
                    autoplay={true}
                    autoplayTimeout = {3}
                    autoplayDirection = {true}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 13, marginBottom: 0,}}/>}
                    activeDot={<View style={{width:8,height:8,backgroundColor:Color.primaryColor,borderRadius:4,marginLeft:3,marginRight:3, marginTop: 13, marginBottom: 0,}}/>}
                >
                    {this.renderImg()}
                </Swiper>

                <Classify/>

                <SectionList
                    renderItem = {this._renderItem}
                    renderSectionHeader = {this._renderSectionHeader}
                    keyExtractor={(item, index) => item.name + index}
                    sections={sections}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.grayBgColor,
    },
    optionStyle:{
        width:width / 5 - 10,
        height:width / 5 - 10,
        marginLeft:8,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor:Color.whiteBgColor,
        justifyContent:"center",
        alignSelf:'center',
        flexDirection:'column',
        alignItems:'center'
    },
});