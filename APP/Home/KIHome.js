import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class KIHome extends Component {
    static navigationOptions = {
        headerTitle: '首页',
        headerTitleStyle: {
            alignSelf: 'center',
        },
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#aabbaa' }}>
                <Text 
                style={{ fontSize: 30,height:100,width:375,backgroundColor:'yellow', textAlignVertical:'center' }}> 首页</Text>
            </View>
        );
    }
}