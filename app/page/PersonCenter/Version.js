/**
 * Created by Jason钟 on 2017/6/12.
 */
import React,{Component} from "react";
import {
    AppRegistry,StyleSheet,Text,View,TextInput,Button,Image
} from "react-native";
import PersonCenter from "./PersonCenter";
import Header from '../../components/Header';
import * as Color from '../../utils/ColorDefined';
import {pixeled} from "../../utils/pixel";

export default class Version extends Component{

    constructor(props) {
        super(props);
    }

    backPersonCenter() {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={[styles.container,{backgroundColor:Color.grayBgColor}]}>
                <Header
                    title="关于deer"
                    leftView={
                        <Image style={styles.backbtn} source={require('../../assets/icon/-back.png')}/>}
                    // onLeftClick={this.backPersonCenter.bind(this, PersonCenter)}
                />

                <View style={styles.logo}>
                    <View style={[styles.logoimg,{backgroundColor:Color.primaryColor}]}>
                        <Image style={{width:100,height:100,borderRadius:50,borderColor:Color.primaryBorderColor,borderWidth:pixeled(1)}} source={require('../../assets/images/logo.png')}/>
                    </View>
                </View>

                <Text style={[styles.aboutcontenttitle,{fontWeight:'bold',}]}>Deer</Text>
                <Text style={[styles.aboutcontenttitle,{marginBottom:20,marginTop:5}]}>版本号:1.0.0</Text>
                <Text style={[styles.aboutdescriptiontitle,{color:Color.threeColor,backgroundColor:Color.grayBgColor}]}>产品介绍</Text>
                <Text style={[styles.aboutdescriptionContent,{color: Color.sixColor}]}>
                    deer是帮助鹿饭更加了解贵圈以及爱豆的app。
                </Text>
                <Text style={[styles.aboutdescriptiontitle,{color:Color.threeColor,backgroundColor:Color.grayBgColor}]}>具体描述</Text>
                <Text style={[styles.aboutdescriptionContent,{color: Color.sixColor}]}>

                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backbtn:{
        marginTop:5,
    },
    logo:{
        height: 110,
        justifyContent: 'center',
    },
    logoimg:{
        borderRadius:60,
        alignSelf:'center',
        justifyContent: 'center',
    },
    logoimgfont:{
        alignSelf:'center',
        justifyContent: 'center',
    },
    aboutcontenttitle:{
        paddingLeft:10,
        alignSelf:'center'
    },
    aboutdescription:{
        backgroundColor:Color.whiteBgColor,
        paddingLeft:10,
    },
    aboutdescriptiontitle:{
        fontSize:14,
        marginTop: 5,
        paddingBottom: 5,
        paddingLeft:10,
        paddingTop:6,
        backgroundColor:Color.whiteBgColor,
    },
    aboutdescriptionContent:{
        fontSize:12,
        paddingLeft:8,
        backgroundColor:Color.whiteBgColor,
        paddingTop:8,
        paddingBottom:8,
        marginBottom: 10,
        paddingRight:10
    },
});