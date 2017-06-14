import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const marginSpace = 10;
export default class KIMineNormalCell extends React.Component {
    render() {
        var data = this.props.rowData;
        var item = require('../../Source/Mine/icon-mine-fans.png');

        switch (data.sonId) {
            case 1: item = require('../../Source/Mine/icon-mine-fans.png'); break;
            case 2: item = require('../../Source/Mine/icon-mine-card.png'); break;
            case 3: item = require('../../Source/Mine/icon-mine-moneybag.png'); break;
            default: item = require('../../Source/Mine/icon-mine-fans.png'); break;
        }


        return (
            <TouchableOpacity onPress={this.props.onSelect.bind(this, data.title)} activeOpacity={0.8}>
                <View style={styles.container}>
                    <View style={[styles.container, { flex: 2 }]}>
                        <Image style={styles.titleImg} source={item}></Image>
                        <Text style={styles.subTitle}>{this.props.rowData.title}</Text>
                    </View>
                    <View style={[styles.container, { justifyContent: 'flex-end' }]}>
                        <Image style={styles.clickImg} source={require('../../Source/General/icon_a_rightarrow.png')}></Image>

                    </View>

                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    titleImg: {
        marginLeft: 20,
    },
    subTitle: {
        color: 'rgb(34,34,34)',
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 10,
    },
    clickImg: {
        width: 8,
        height: 13,
        marginRight: 20,
    }
});