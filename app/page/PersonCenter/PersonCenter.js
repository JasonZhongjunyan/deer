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
    TouchableOpacity
} from 'react-native';
import Header from "../../components/Header";
import * as Color from '../../utils/ColorDefined';

export default class PersonCenter extends Component {
    constructor(props){
        super(props);
    }

    goToResetPassword(){

    }
    goToOperate(){

    }
    goToVersion(){

    }
    exitLogin(){

    }


    render() {
        return (
            <View>
                <Header title='个人中心'/>

                <View style={[styles.userInfo,{backgroundColor:Color.writeFontColor}]}>
                    <View  style={[styles.userInfoimg,{backgroundColor:Color.primaryColor}]}>
                        <Text style={[styles.userInfoImgFont,{color:Color.writeFontColor}]}>钟俊艳</Text>
                    </View>
                    <Text style={[styles.userInfoName,{color:Color.defaultFontColor}]}>13890878115</Text>
                    <Text style={[styles.userInfoAddress,{color:Color.threeColor}]}>双流县中和镇龙腾苑3-1805</Text>
                </View>

                <TouchableOpacity style={[styles.operate,{backgroundColor:Color.writeFontColor}]} onPress={this.goToResetPassword.bind(this,'ResetPassword')}  key="resetPassword">
                    <Text style={[styles.operateLeft,styles.operateLeftFont,{color:Color.threeColor}]}>密码修改</Text>
                    <Image style={styles.operateRight} source={require('../../assets/icon/icon-next.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.operate,{backgroundColor:Color.writeFontColor}]} onPress={this.goToOperate.bind(this, 'HelpAndResponse')} key="feedBack">
                    <Text style={[styles.operateLeft,styles.operateLeftFont,{color:Color.threeColor}]}>帮助与反馈</Text>
                    <Image style={styles.operateRight} source={require('../../assets/icon/icon-next.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.operate,{backgroundColor:Color.writeFontColor}]} onPress={this.goToVersion.bind(this, 'AboutVersion')} key="Version">
                    <Text style={[styles.operateLeft,styles.operateLeftFont,{color:Color.threeColor}]}>关于车况大师</Text>
                    <Image style={styles.operateRight} source={require('../../assets/icon/icon-next.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.exitLogin,{backgroundColor:Color.whiteBgColor}]} onPress={this.exitLogin.bind(this)}  key="exit">
                    <Text style={[styles.exitLoginText,{color:Color.primaryColor}]}>
                        退出登录
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    userInfo: {
        marginBottom:20,
    },
    userInfoimg:{
        width:70,
        height:70,
        borderRadius:35,
        marginTop:20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    userInfoImgFont:{
        alignSelf: 'center',
    },
    userInfoName:{
        fontSize:16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop:10,
        marginBottom:5,
    },
    userInfoAddress:{
        fontSize:12,
        marginBottom:18,
        alignSelf: 'center',
    },
    operate:{
        borderColor: '#F5F5F5',
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
    },
    operateLeft:{
        flex:8,
        paddingLeft: 10,
        alignSelf:'center'
    },
    operateLeftFont:{
        justifyContent: 'center',
        fontSize:14,
    },
    operateRight:{
        alignSelf:'center',
        marginRight:20
    },
    exitLogin: {
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#FFFFFF",
        justifyContent: 'center',
    },
    exitLoginText:{
        alignSelf:'center',
        fontSize:16,
    }
});