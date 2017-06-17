'use strict'
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, RefreshControl, Button, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
var ITEM_HEIGHT = 100;

export default class KITopic extends React.PureComponent {
    static navigationOptions = {
        title: 'FlatList / 30Demo',
    }

    constructor(props) {
        super(props);
        this.state = {
            //设置为true则会一直刷新
            refreshing: false,
        };


    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#aabbaa' }}>
                <Button title='滚动到指定位置' onPress={() => {
                    //this._flatList.scrollToEnd();
                    //this._flatList.scrollToIndex({viewPoition:0, index:8});
                    this._flatList.scrollToOffset({animation:true, offset:300});
                }} />
                <View style={{ flex: 1 }}>
                    <FlatList style={{ flex: 1,backgroundColor:'white', overflow:'hidden' }}
                        //数据源
                        data={this._listData()}
                        //默认开始渲染的元素个数， 在回到头部时不会重新渲染
                        initialNumToRender={8}
                        ref={(flatList) => this._flatList = flatList}
                        //头部
                        ListHeaderComponent={this._header}
                        //尾部
                        ListFooterComponent={this._footer}
                        //行间距
                        ItemSeparatorComponent={this._separator}
                        //布局方式  
                        horizontal={false}
                        //渲染一行的组件
                        renderItem={this._renderItem}
                        //目前多列仅支持竖直方向下的排序  并且不支持瀑布流
                        numColumns={2} 
                        //布局 如果设置了多列布局 即numColumns值大于1的整数，则可以额外指定样式在每行的容器上
                        columnWrapperStyle={{ borderWidth: 2, borderColor: 'black' }}
                        refreshing={this.state.refreshing}
                        //可选优化 避免动态测量内容的开销 如果行高是固定的（必须加上分隔线的高度） 可以如下计算
                        getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: (ITEM_HEIGHT + 2) * index, index })}
                        //标准的刷新
                        onRefresh={this._onRefresh}
                        onEndReachedThreshold={0.1}
                        onEndReached={(info) => {
                            //alert('滑动到底部了');
                        }}
                        onViewableItemsChanged={(info) => {
                            //alert('可见不可见触发');
                        }}
                        
                        removeClippedSubviews={false}
                    >
                    </FlatList>

                </View>
            </View>
        );
    }

    _renderItem = (item) => {
        let item1 = item;
        var txt = '第' + item.index + '个' + ' title=' + item1.item.title;
        var bgColor = item.index % 2 == 0 ? 'rgba(220,220,220,1.0)' : '#ddaabb';
        return (
            <TouchableOpacity onPress={() => { this._pushOrPresent(0,item.index,item.item.title) }}>
                <Text style={[{ flex: 1, height: ITEM_HEIGHT, backgroundColor: bgColor, width: width / 2,overflow:'hidden' }, styles.txt]}>{txt}</Text>
            </TouchableOpacity>
        );
    }

    _header = () => {
        return <Text style={[styles.txt, { backgroundColor: 'rgb(277,96,40)' }]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{ height: 2, backgroundColor: 'yellow' }} />;
    }

    _onRefresh() {
        // alert('正在刷新中.... ');
    }

    _pushOrPresent(section, index, title) {
        // if(section != 0) {alert(title); return;}
        switch(index) {
            case 0 : {
                this.props.navigation.navigate('KIRNDemo');
                break;
            }
            default : {
                alert(title);
                break;
            }
        }

    }

    _listData() {
        let array = [{key : '0',title:'开始你的旅程骚年'}];
        for (let i = 1; i < 50; i++) {
            array.push({ key: i, title: i + '' })
        }
        return array;
    }


}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});