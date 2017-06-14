import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated, ScrollView, TouchableOpacity } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
export default class MyTabViewBarDemo extends React.Component {
    static navigationOptions = ({ navigarion }) => ({
        headerTitle: navigarion.state.params.title,
    });

    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,

        tabNames: React.PropTypes.array,
        tabIconNames: React.PropTypes.array,
    };

    setAnimationValue({ value }) {
        console.log(value);
    }

    componentDidMount() {
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={() => this.props.goToPage(i)} style={styles.tab} key={i}>
                <View style={styles.tabItem}>
                    <Icon name={this.props.tabIconNames[i]} size={30} color={color}>
                    </Icon>
                    <Text style={{ color: color }}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: { flexDirection: 'row', height: 50, backgroundColor:'white' },
    tab: { flex: 1, justifyContent: 'center', alignItems: 'center', },
    tabItem: { flexDirection: 'column', alignItems: 'center', },
});
