import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, Animated, ScrollView,
    TouchableOpacity, ListView, WebView
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

import KIOrderListWaitPayCell from './OrderListView/KIOrderListWaitPayCell'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var data = require('../Source/Mine/orderList.json');
export default class KIMineOrderList extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTitleStyle: {
            alignSelf: 'center',
        },
        headerRight: (
            <Text style={{ color: 'rgb(42,122,251)', fontSize: 15, marginRight:10 }}
                onPress={() => { navigation.state.params.rightBarItem('web') }}>web</Text>
        ),

    });

    constructor(props) {
        super(props);

        var allPageDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        var payDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        var receiveDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        var sendOutGoodDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        var evaluateDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        this.state = {
            allOrderPageDS: allPageDS.cloneWithRows(data.orderList),
            payOrderDS: payDS.cloneWithRows(this.payData()),
            receiveOrderDS: receiveDS.cloneWithRows(this.receiveData()),
            sendOrderOutDS: sendOutGoodDS.cloneWithRows(this.sendOutGoodData()),
            evaluateOrderDS: evaluateDS.cloneWithRows(this.evaluateData()),
        };
    }
    async componentDidMount() {
        this.props.navigation.setParams({
            rightBarItem: this.rightBarItem,
        });
    }
    rightBarItem = (text) => {
        if (text) {
            this.props.navigation.navigate('KIWebView', { title: '客服' });
        }
    };
    //待付款
    payData = () => {
        let payArray = [];
        for (let i = 0; i < data.orderList.length; i++) {
            if (data.orderList[i].type == 'pay') {
                payArray.push(data.orderList[i]);
            }
        }
        return payArray;
    };
    //待发货
    receiveData = () => {
        let receiveArray = [];
        for (let i = 0; i < data.orderList.length; i++) {
            if (data.orderList[i].type == 'receive') {
                receiveArray.push(data.orderList[i]);
            }
        }
        return receiveArray;
    };
    //待发货
    sendOutGoodData = () => {
        let sendArray = [];
        for (let i = 0; i < data.orderList.length; i++) {
            let item = data.orderList[i];
            if (item.type == 'sendOutGoods') {
                sendArray.push(item);
            }
        }
        return sendArray;
    }
    //待评价
    evaluateData = () => {
        let evaluateArray = [];
        for (let i = 0; i < data.orderList.length; i++) {
            let item = data.orderList[0];
            if (item.type === 'normal') {
                evaluateArray.push(item);
            }
        }
        return evaluateArray;
    }


    render() {
        let pageparams = this.props.navigation.state.params;
        // this.payData();
        return (
            <ScrollableTabView
                style={{ marginTop: 0, }}
                initialPage={pageparams.index} //默认显示第几页
                tabBarPosition='top'  //默认在顶部top，bottom可以设置在底部
                renderTabBar={() => <ScrollableTabBar />}   //DefaultTabBar为同一个屏幕 ScrollableTabBar可以超过屏幕
                tabBarUnderlineStyle={{ height: 2, backgroundColor: 'rgba(253,83,98,1.0)', borderRadius: 1 }} //底部滑动的线条
                tabBarActiveTextColor='rgba(253,83,98,1.0)' //选中标签的颜色
                tabBarInactiveTextColor='rgba(34,34,34,1.0)'  //未选中标签的颜色
                tabBarBackgroundColor='white'  //tab标签栏的背景颜色
                scrollWithoutAnimation={false}  //动画 ？？？？用处
                locked={false} //默认是可以左右滚动的 true禁止滚动，只能点击
                //滚动返回的
                onScroll={(postion) => {
                    // float类型 [0, tab数量-1]  
                    console.log('scroll position:' + postion);

                }}
                //选择的第几个
                onChangeTab={(obj) => {
                    console.log('index:' + obj.i);
                }}>

                <ListView tabLabel='全部' dataSource={this.state.allOrderPageDS} renderRow={this._renderRow} />
                <ListView tabLabel='待付款' dataSource={this.state.payOrderDS} renderRow={this._renderRow} />
                <ListView tabLabel='待收货' dataSource={this.state.receiveOrderDS} renderRow={this._renderRow} />
                <ListView tabLabel='待发货' dataSource={this.state.sendOrderOutDS} renderRow={this._renderRow} />
                <ListView tabLabel='待评价' dataSource={this.state.evaluateOrderDS} renderRow={this._renderRow} />
                <WebView tabLabel='售后' style={{ flex: 1 }}
                    source={{ uri: 'http://www.58.com', method: 'GET' }}
                    //网页加载结束时调用
                    onLoad={() => {
                        console.log('-------onLoad');
                    }}
                    //网页加载结束不管成功还是失败
                    onLoadEnd={() => {
                        console.log('-----onLoadEnd');
                    }}
                    //网页开始加载的时候
                    onLoadStart={() => {
                        console.log('-----onLoadStart');
                    }}
                    //当网页加载失败的时候
                    onError={() => {
                        console.log('-------onError');
                    }}
                />

            </ScrollableTabView>
        );
    }

    _renderRow(rowData, sectionId, rowId, hightlightRow) {
        return (<KIOrderListWaitPayCell rowData={rowData} rowId={rowId} />
        );
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, },
    page: { flex: 1, alignItems: 'center', justifyContent: 'center', },
    tabbar: { backgroundColor: 'white', },
    // tab: {
    //     opacity: 1,
    //     width: 90,
    // },
    indicator: {
        backgroundColor: '#ff4081',
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        margin: 8,
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    tabs: { flexDirection: 'row', height: 50, },
    tab: { flex: 1, justifyContent: 'center', alignItems: 'center', },
    tabItem: { flexDirection: 'column', alignItems: 'center', },
});