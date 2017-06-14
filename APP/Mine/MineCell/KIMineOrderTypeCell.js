import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

/**
 * 我的订单的 待发货 待付款  待收货。。。。
 */
export default class KIMineOrderTypeCell extends React.Component {
    render() {
        var item = this.props.rowData.list;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../../Source/Mine/icon_mine_pay.png')} />
                    <Text style={styles.title}>{item[0].title}</Text>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../../Source/Mine/icon_mine_delivery.png')} />
                    <Text style={styles.title}>{item[1].title}</Text>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../../Source/Mine/icon_mine_receive.png')} />
                    <Text style={styles.title}>{item[2].title}</Text>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../../Source/Mine/icon_mine_comment.png')} />
                    <Text style={styles.title}>{item[3].title}</Text>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../../Source/Mine/icon_mine_afsale.png')} />
                    <Text style={styles.title}>{item[4].title}</Text>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: 32,
        height: 32,
    },
    title: {
        fontSize: 10,
        color: 'black'
    },
});