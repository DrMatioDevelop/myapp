import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const marginSpace = 20;
export default class KIMineNormalHead extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.props.onClickHead} activeOpacity={1}>
                    <View style={styles.container}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Image style={styles.headImageSty} source={require('../../Source/General/head.png')} />
                            <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.nameSty, { marginLeft: 10 }]} numberOfLines={1} >德玛西亚德玛西亚德玛西亚德玛西亚</Text>
                                    <Image style={[styles.iconImage, { marginRight: 10 }]} source={require('../../Source/General/icon_a_rightarrow.png')} />
                                </View>
                                <Text style={{ fontSize: 12, color: 'red', marginTop: 10, marginLeft: 10 }} numberOfLines={1}>
                                    {this.props.headData ? this.props.headData : '随手十五字'}
                                </Text>
                            </View>
                        </View>


                    </View>
                    <View style={styles.lineStyle} />
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        height: 100,
    },
    headImageSty: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: marginSpace,
        backgroundColor: '#CCC',
        resizeMode: 'contain',
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
    },
    nameSty: {
        fontSize: 15,
        textAlign: 'left',
        color: 'rgba(0,0,0,0.6)',
        width: 100,
        marginLeft: marginSpace,
    },
    iconImage: {
        width: 8,
        height: 13,
        marginRight: marginSpace,
    },
    lineStyle: {
        width: 375,
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,1)',
        marginBottom: 0,
        alignSelf: 'flex-end',
        marginLeft: 0,
    },

});