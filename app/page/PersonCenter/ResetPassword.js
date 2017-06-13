/**
 * Created by Jason钟 on 2017/6/12.
 */
import React, {Component} from "react";
import {
    StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, TouchableHighlight, Navigator, Image
} from "react-native";

import PersonCenter from "./PersonCenter";
import Header from '../../components/Header';
import * as Color from '../../utils/ColorDefined';

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: this.props.auth.mobile,
            access_token: this.props.auth.token,
            password: "",
            confirm: "",
            isShow:true,
            isShow2:true
        };
    }

    backPersonCenter() {
        // this.props.navigation.goBack();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status !== this.props.status && nextProps.status === 'done') {
            if (nextProps.isSuccess) {
                // ToastShort("修改密码成功!");
                // this.props.navigator.resetTo({
                //     id: 'LoginContainer',
                //     component: LoginContainer,
                // });
            } else {
                // ToastShort("修改密码失败,请检查您的网络设置!");
            }
        }
        return true;
    }

    resetPassword() {
        let password = this.state.password;
        let confirm = this.state.confirm;
        let mobile = this.state.mobile;
        let token = this.state.access_token;
        if (password == '' || confirm == '') {
            ToastShort("密码不能为空,请输入!");
            return;
        } else if (password != confirm) {
            ToastShort("两次输入的密码不一致,请重新输入!");
            return;
        } else {
            // DoResetPassword(this.props.dispatch, password, confirm, mobile, token);
        }
    }

    showPass(){
        this.setState({isShow : !this.state.isShow});
    }
    showPass2(){
        this.setState({isShow2 : !this.state.isShow2});
    }

    render() {
        var that = this;
        return (
            <View style={[styles.container, {backgroundColor: Color.greyBgColor}]}>

                <Header
                    leftView={<Image style={styles.backbtn} source={require('../../assets/icon/-back.png')}/>}
                    onLeftClick={this.backPersonCenter.bind(this, PersonCenter)}
                    title="重置密码"
                />

                {/*<View style={styles.resetPass}>*/}
                <Text style={styles.resetPassTitle}>请输入新密码</Text>
                <View style={styles.resetPass}>
                    <TextInput underlineColorAndroid='transparent'
                               style={[styles.newPassContent, styles.pass,{backgroundColor: Color.whiteBgColor}]}
                               placeholder='请输入您的新密码'
                               placeholderTextColor={Color.nineColor}
                               secureTextEntry={this.state.isShow}
                               onChangeText={(text) => {
                                   that.setState({password: text})
                               }}
                    />
                    <TouchableOpacity  style={styles.eyeIcon} activeOpacity={1} onPress={this.showPass.bind(this)}>
                        <Image
                            source={this.state.isShow ? require('../../assets/icon/show.png') : require('../../assets/icon/dont-show.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.resetPass}>
                    <TextInput underlineColorAndroid='transparent'
                               style={[styles.newPassContent, styles.pass, {backgroundColor: Color.whiteBgColor}]}
                               placeholder='确认密码'
                               placeholderTextColor={Color.nineFont}
                               secureTextEntry={this.state.isShow2}
                               onChangeText={(text) => {
                                   that.setState({confirm: text})
                               }}
                    />
                    <TouchableOpacity  style={styles.eyeIcon} activeOpacity={1} onPress={this.showPass2.bind(this)}>
                        <Image
                            source={this.state.isShow2 ? require('../../assets/icon/show.png') : require('../../assets/icon/dont-show.png')}/>
                    </TouchableOpacity>
                </View>

                {/*</View>*/}

                <TouchableOpacity style={[styles.btn, {backgroundColor: Color.primaryColor}]}
                                  onPress={this.resetPassword.bind(this)} activeOpacity={.65}>
                    <Text style={[styles.btnFont, {color: Color.primaryColor}]}>提交</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resetPass: {
        height: 45,
        marginTop:10
    },
    resetPassTitle: {
        marginTop: 45,
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    pass: {
        paddingLeft: 10,
        height: 45,
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
    },
    newPassContent: {
        // flex: 1
    },
    btn: {
        width: 160,
        height: 45,
        marginTop: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "center",
        borderRadius: 40
    },
    btnFont: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: "center",
        alignSelf: 'center'
    },
    eyeIcon:{
        position:'absolute',
        top:17,
        right:15,
        width:20,
        height:15
    },
});