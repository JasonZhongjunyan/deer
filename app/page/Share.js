/**
 * Created by Jason钟 on 2017/7/13.
 */
import React, { Component } from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,TextInput,Dimensions,Share} from 'react-native';
import Header from '../components/Header';
const {width,height} = Dimensions.get('window');

export default class MyShare extends Component{
    constructor(props){
        super(props);
        this.state = {
            result: ''
        };
    }

    _shareMessage() {
        Share.share({
            message: 'React Native | A framework for building native apps using React'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _shareText() {
        Share.share({
            message: 'A framework for building native apps using React',
            url: 'http://facebook.github.io/react-native/',
            title: 'React Native'
        }, {
            dialogTitle: 'Share React Native website',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ],
            tintColor: 'green'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _showResult(result) {
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({result: 'shared with an activityType: ' + result.activityType});
            } else {
                this.setState({result: 'shared'});
            }
        } else if (result.action === Share.dismissedAction) {
            this.setState({result: 'dismissed'});
        }
    }

    render(){
        return(
            <View>
                <Header title='分享给朋友'/>

                <View>
                    <TouchableOpacity style={styles.wrapper}
                                        onPress={this._shareMessage}>
                        <View style={styles.button}>
                            <Text>Click to share message</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper}
                                        onPress={this._shareText}>
                        <View style={styles.button}>
                            <Text>Click to share message, URL and title</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>{this.state.result}</Text>
                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});