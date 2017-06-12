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
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

var images=[
    'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',
    'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg',
    'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
    'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
    'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg',
];

export default class ImgSwiper extends Component {
    constructor(props){
        super(props);
    }

    renderImg(){
        var imageViews=[];
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


    render() {
        return (
            <View>
                <Swiper height={200}
                        autoplay={true}
                        dot={<View style={{width:8,height:8,backgroundColor:'white',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                        activeDot={<View style={{width:8,height:8,backgroundColor:'green',borderRadius:4,marginLeft:3,marginRight:3}}></View>}

                >
                    {this.renderImg()}
                </Swiper>
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
    }
});