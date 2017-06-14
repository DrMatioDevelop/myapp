import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class KIShopping extends Component {
    static navigationOptions={
        title:'购物',
    }
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#aabbaa' }}>
                <Text style={{ fontSize: 30 }}> 购物</Text>
            </View>
        );
    }
}