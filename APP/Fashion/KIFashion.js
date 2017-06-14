import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class KIFashion extends Component {
    static navigationOptions={
        title:'时尚圈',
    }
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#aabbaa' }}>
                <Text style={{ fontSize: 30 }}> 时尚圈</Text>
            </View>
        );
    }
}