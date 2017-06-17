import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation';

//一级
import KIHome from '../Home/KIHome';
import KIFashion from '../Fashion/KIFashion';
import KITopic from '../Topic/KITopic';
import KIShopping from '../Shopping/KIShopping';
import KIMine from '../Mine/KIMine';

//公用
import KIWebView from './KIWebView';

//专题 
import KIRNDemo from '../Topic/KIRNDemo';
import RNDay1  from '../Topic/Day/day1';
//我的
import KIMineOrderList from '../Mine/KIMineOrderList'
import MyTabViewDemo from '../Mine/MyTabViewDemo'

//测试
import KIEmptyPage from './KIEmptyPage';
import KIEmptyPage1 from './KIEmptyPage1';




/**
 * react-navigation 导航栏的一些属性翻译   http://www.jianshu.com/p/2f575cc35780
 *                                      http://blog.csdn.net/sinat_17775997/article/details/70176688
 * Touchable 按钮触摸时间的处理 http://www.jianshu.com/p/07dba092b6b9
 * Text属性                   http://blog.csdn.net/sjzx3142/article/details/53393310
 * JS组件各种样式              https://github.com/rilyu/teaset
 */





class App extends Component {
    static navigationOptions = {
        titile: '首页',
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ccaabb' }}>
                <Text style={{ fontSize: 20 }}>shijue就是垃圾</Text>
            </View>
        );
    }
}


const MainScreenNavigator = TabNavigator({
    Home: {
        screen: KIHome,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (false), //tabar文字属性隐藏
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Source/Tabbar/tab_all_home.png')}
                    style={[{ tintColor: tintColor }, styles.icon]} />
            ),
        }
    },
    Fashion: {
        screen: KIFashion,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (false),
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Source/Tabbar/tab_all_fashion.png')}
                    style={[{ tintColor: tintColor }, styles.icon]} />
            ),
        }
    },
    Topic: {
        screen: KITopic,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (false),
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Source/Tabbar/tab_all_subject.png')}
                    style={[{ tintColor: tintColor }, styles.icon]} />
            )
        }
    },
    Shopping: {
        screen: KIShopping,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (false),
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Source/Tabbar/tab_all_shop.png')}
                    style={[{ tintColor: tintColor }, styles.icon]} />
            ),
        }
    },
    Mine: {
        screen: KIMine,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (false),
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Source/Tabbar/tab_all_mine.png')}
                    style={[{ tintColor: tintColor }, styles.icon]} />
            ),
        }
    },
}, {
        animationEnabled: false,  // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false,      // 禁止左右滑动
        backBehavior: 'none',     // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#000000', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            style: {
                backgroundColor: '#fff', // TabBar 背景色
            },
            labelStyle: {
                fontSize: 12, // 文字大小
            },
        },
    });
const styles = StyleSheet.create({
    icon: { height: 44, width: 75, resizeMode: 'contain' , backgroundColor:'white'},
});
//这个必须放在最后面才行
const SimpleApp = StackNavigator({
    Home: { screen: MainScreenNavigator },
    KIFashion: { screen: KIFashion },
    KIMine: {
        screen: KIMine,
        path: 'app/KIMine',
        navigationOptions: {},
    },
    KIRNDemo : {screen:KIRNDemo},
    RNDay1:{screen:RNDay1},
    KIMineOrderList: { screen: KIMineOrderList },
    MyTabViewDemo: { screen: MyTabViewDemo },
    KIEmptyPage1: { screen: KIEmptyPage1 },
    KIWebView: { screen: KIWebView },
    KIEmptyPage: {
        screen: KIEmptyPage,  //必须，其他都是非必须
        path: 'app/KIEmptyPage', //使用url导航时用到， 如web app与 deep link
        navigationOptions: {}   //此处设置了，会覆盖组件内部的 static navigationOptions
    },
}, {
        initialRouteName: 'Home', //默认显示界面  必须是已经注册的界面
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            //push后  返回按钮的名字
            // headerBackTitle: '返回',
            //导航栏背景
            headerStyle: {
                backgroundColor: 'white'
            },
            //导航栏标题设置
            headerTitleStyle: {
                color: 'rgb(37,96,255)',
            },
            cardStack: {
                gesturesEnabled: true
            }
        },
        mode: 'card', //页面切换模式，左右card(相当于iOS中的push效果),上下是modal(相当于ios中modal效果)
        headerMode: 'screen', //导航栏显示模式,screen:有渐变效果, float:无透明效果,none:隐藏导航栏
        onTransitionStart: () => { console.log('导航栏切换开始') }, //导航栏开始切换回调
        onTransitionEnd: () => { console.log('导航栏切换结束') }, //导航栏结束切换
    });
export default SimpleApp;