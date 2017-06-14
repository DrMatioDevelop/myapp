import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class KITopic extends Component {
    static navigationOptions={
        title:'专题',
    }
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#aabbaa' }}>
                <Text style={{ fontSize: 30 }}> 专题</Text>
            </View>
        );
    }
}