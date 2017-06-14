import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const marginSpace = 20;
export default class KIMineNormalHead extends React.Component {
    render() {
        return (
            /*<View style={styles.container}>
                <Image style={styles.headImageSty} source={{ uri: this.props.rowData.imgUrl }} />
                <Text style={styles.nameSty}>{this.props.rowData.nickName}</Text>
                <Image style={styles.iconImage} source={require('../../Source/General/icon_a_rightarrow.png')} />>
                <View style={styles.alignSelf} />>
            </View>*/
            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.props.onClickHead} activeOpacity={1}>

                    <View style={styles.container}>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Image style={styles.headImageSty} source={require('../../Source/General/head.png')} />
                            <Text style={styles.nameSty} numberOfLines={1} >德玛西亚德玛西亚德玛西亚德玛西亚</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Image style={styles.iconImage} source={require('../../Source/General/icon_a_rightarrow.png')} />
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