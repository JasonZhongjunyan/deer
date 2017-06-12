/**
 * Created by Jason钟 on 2017/6/8.
 */
import React, {Component, PropTypes} from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, Platform, Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import * as Color from '../utils/ColorDefined';

var {height, width} = Dimensions.get('window');

export default class Header extends Component{
    static propTypes = {
        leftView:PropTypes.element,
        onLeftClick:PropTypes.func,
        title: PropTypes.string,
        rightView:PropTypes.element,
        onRightClick:PropTypes.func

    };
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.leftStyle}
                    onPress={this.props.onLeftClick ? this.props.onLeftClick : null}>
                    {this.props.leftView}
                </TouchableOpacity>

                <Text style={styles.titleStyle}>{this.props.title ? this.props.title :''}</Text>

                <TouchableOpacity
                    style={styles.rightStyle}
                    onPress={this.props.onRightClick ? this.props.onRightClick : null}>
                    {this.props.rightView}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    container: {
        height:40,
        backgroundColor: Color.primaryColor,
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftStyle:{
        width:60,
        height: 40,
        marginLeft:0,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    titleStyle:{
        fontSize: 14,
        fontWeight: "bold",
        color: Color.writeFontColor
    },
    rightStyle:{
        width:60,
        height:40,
        marginRight:0,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
};