import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity } from 'react-native';

import KIMineNormalCell from './MineCell/KIMineNormalCell';
import KIMineNormalHead from './MineCell/KIMineNormalHead';
import KIMineOrderTypeCell from './MineCell/KIMineOrderTypeCell';
import KIMineAboutRelationCell from './MineCell/KIMineAboutRelationCell';

var Dismensions = require('Dimensions');
var { width } = Dismensions.get('window');

export default class KIMine extends Component {
    static navigationOptions = {
        headerTitle: '我的',
        header: null,     //隐藏设置header为null
        headerTitleStyle: {
            alignSelf: 'center',
        },
    }



    constructor(props) {
        super(props);
        var data = require('../Source/Mine/Mine.json');
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        this.state = {
            datasource: ds.cloneWithRows(data),
        };

    }

    customGoBack(info) {
        this.setState({info : info});
    }
    render() {
        return (
            <ListView
                dataSource={this.state.datasource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator.bind(this)}
                renderHeader={this._renderHeader.bind(this)} />
        );
    }

    //每行内容
    _renderRow(rowData, sectionId, rowId, hightlightRow) {
        if (rowData.ID == 0) {
            return (
                <KIMineAboutRelationCell rowData={rowData} />
            );
        } else if (rowData.ID == 1) {
            return (
                <KIMineNormalCell onSelect={(title) => { this._pushOrPresent(title) }} rowData={rowData} />
            );
        } else if (rowData.ID == 2) {
            return (
                <KIMineOrderTypeCell onSelect={(title) => { this._pushOrPresent(title) }} rowData={rowData} />
            );
        } else {
            return (
                <View style={{ backgroundColor: 'red', height: 1 }}></View>
            );
        }

    }

    //跳转界面
    _pushOrPresent(text) {
        // alert(text);
        if (text == "我的订单") {
            this.props.navigation.navigate('KIMineOrderList', { title: text, index:0 });
        }
        else if(text == '自定义tabView') {
            this.props.navigation.navigate('MyTabViewDemo',{title:text});
        }
        else {
            this.props.navigation.navigate('KIEmptyPage', { title: text ,customGoBack:this.customGoBack.bind(this) });
        }
    }
    //头部视图
    _renderHeader() {
        return (
            <KIMineNormalHead onClickHead={() => { this._headEvent('点击了头部') }} headData={this.state.info}/>
        );
    }
    //头部点击事件
    _headEvent(text) {
        alert('info :' + text);
    }
    //分割线
    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                style={{ height: 0.5, backgroundColor: 'rgba(0,0,0,0.2)' }}>
            </View>
        );
    }
}

const MineStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1.0)',
    },
    image: {
        width: 50, height: 50, marginLeft: 10, marginRight: 10, marginTop: 10,
        resizeMode: 'center',
    },
    titleInfo: {
        marginTop: 10,
        color: 'black',
        width: width * 0.75,
        fontSize: 15,
        textAlignVertical: 'top',
    },
    subtitle: {
        color: 'red',
    },
});