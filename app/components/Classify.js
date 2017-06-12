/**
 * Created by Jason钟 on 2017/6/9.
 */
import React, {Component, PropTypes} from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, Platform, Dimensions,Image,
    TouchableWithoutFeedback
} from 'react-native';
import * as Color from '../utils/ColorDefined';
import {pixeled} from "../utils/pixel";

var {height, width} = Dimensions.get('window');

export default class Classify extends Component{
    static propTypes = {
        leftView:PropTypes.element,
        onLeftClick:PropTypes.func,
        title: PropTypes.string,
        rightView:PropTypes.element,
        onRightClick:PropTypes.func

    };
    constructor(props){
        super(props);
        this.state = {
            optionSection : [
                {image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',title:'Food',text:'美食'},
                {image:'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',title:'TakeOut',text:'外卖'},
                {image:'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',title:'Movies',text:'电影'},
                {image:'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',title:'House',text:'住宿'},
                {image:'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',title:'Ktv',text:'KTV'},
                {image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',title:'Travel',text:'周边游'},
                {image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',title:'Play',text:'休闲娱乐'},
                {image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',title:'Tickets',text:'火车票'},
                {image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',title:'Hair',text:'丽人/美发'},
                {image:'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',title:'More',text:'更多'},
            ],
        }
    }

    goClassifyDetail(item){
        console.log(item);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
                    {
                        this.state.optionSection.map((image,i)=>(
                            <TouchableOpacity style={styles.optionStyle} activeOpacity={.8} key={"option" + i }
                                              onPress={this.goClassifyDetail.bind(this,image.title)}>
                                <View style={{width:40,height:40,borderRadius:20,backgroundColor:Color.whiteBgColor,justifyContent:'center',borderWidth:pixeled(1),borderColor:Color.primaryColor,overflow:'hidden'}}>
                                    <Image source={{uri: image.image}} style={{width:40,height:40,borderRadius:20}}/>
                                </View>
                                <Text style={{color:Color.primaryColor,fontSize:13}}>{image.text}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: Color.primaryColor,
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems: "center"
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
};