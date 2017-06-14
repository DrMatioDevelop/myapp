import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class KIOrderListWaitPayCell extends React.Component {
    render() {
        var item = this.props.rowData;
        let h = this.props.rowId == 0 ? this._renderHeight(item) : this._renderHeight(item) + 10;
        return (
            <View style={[styles.container, { height: h }]}>
                {this.props.rowId == 0 ? null : <View style={{ backgroundColor: 'rgba(240,240,240,1.0)', height: 10, width: ScreenWidth }} />}
                {this.props.rowId == 0 ? null : <View style={styles.line} />}
                <View style={{ width: ScreenWidth, height: 50, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={styles.orderNum}>订单编号:{item.orderId}</Text>
                </View>
                <View style={styles.line}></View>
                {this.props.rowData.productList.map((product, i) => this._renderProductItem(product, i, item))}
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: 50, width: ScreenWidth }}>
                    <Text style={styles.total}>{item.orderInfo}</Text>
                </View>
                <View style={styles.line}></View>
                {this._renderHandleOrder(item)}
            </View>
        );
    };

    //是否展示取消订单与去付款
    _renderHandleOrder(rowData) {
        if (rowData.type == 'pay') {
            return (<View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: 50, width: ScreenWidth }}>
                <TouchableOpacity onPress={() => { alert('取消订单') }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(102,102,102,1.0)', borderWidth: 1, borderRadius: 4, height: 35, width: 80, marginRight: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: 'rgba(102,102,102,1.0)', }}>取消订单</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { alert('立即付款') }}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', borderColor: 'rgba(253,85,98,1.0)', borderWidth: 1, borderRadius: 4, height: 35, width: 80, marginRight: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: 'rgba(253,85,98,1.0)' }}>立即付款</Text>
                    </View>
                </TouchableOpacity>
            </View>);

        }
        else if (rowData.type == 'receive') {
            return (<View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: 50, width: ScreenWidth }}>
                <TouchableOpacity onPress={() => { alert('查看物流') }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(102,102,102,1.0)', borderWidth: 1, borderRadius: 4, height: 35, width: 80, marginRight: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: 'rgba(102,102,102,1.0)', }}>查看物流</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { alert('确认收货') }}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', borderColor: 'rgba(253,85,98,1.0)', borderWidth: 1, borderRadius: 4, height: 35, width: 80, marginRight: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: 'rgba(253,85,98,1.0)' }}>确认收货</Text>
                    </View>
                </TouchableOpacity>
            </View>);
        }
        return null;
    };

    //cell高度
    _renderHeight(rowData) {
        let h = 50 * 2;
        if (rowData.productList.length > 0) {
            h = h + rowData.productList.length * 100.0;
        }
        if (rowData.type == 'pay' || rowData.type == 'receive') {
            h = h + 50;
        }
        return h;
    };

    _renderProductItem(product, i, rowData) {
        return (
            <View style={styles.product} key={i}>
                <Image style={{ alignSelf: 'center', width: 50, height: 50 * 162 / 104, resizeMode: 'contain' }}
                    source={{ uri: product.productImg }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
                        <Text style={styles.productName} numberOfLines={2}>
                            {product.productName}
                        </Text>
                        <View style={{ flexDirection: 'column', justifyContent: 'flex-end', marginLeft: 15 }}>
                            <Text style={{ fontSize: 12, color: 'rgba(253,85,93,1.0)' }}>{product.price}元</Text>

                            {product.originalPrice > product.price ? (<Text style={{
                                fontSize: 12, color: 'rgba(34,34,34,1.0)', textDecorationLine: 'line-through',
                                textDecorationColor: 'black'
                            }}>{product.originalPrice}元</Text>) : null}

                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: ScreenWidth - 50 }}>
                        <Text style={styles.productSizeAndColor}>{product.skuInfo}</Text>
                        <Text style={styles.orderType}>
                            {rowData.type == 'normal' ? '待评价' : 
                            (rowData.type == 'pay' ? '待付款' : (rowData.type == 'receive' ? '待收货' : '待发货') )}
                            </Text>
                    </View>
                </View>

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },
    line: {
        height: 1,
        width: ScreenWidth,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    orderNum: {
        fontSize: 15,
        color: 'rgba(34,34,34,1.0)',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginLeft: 20,
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 100
    },
    productInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 50
    },
    productName: {
        color: 'rgba(34,34,34,1.0)',
        width: ScreenWidth * 0.618,
        fontSize: 15,
    },
    productSizeAndColor: {
        color: 'rgba(102,102,102,1.0)',
        fontSize: 12,
        textAlign: 'right',
        // marginBottom: 10,
        // marginLeft: 0,
    },
    orderType: {
        color: 'rgba(253,85,98,1.0)',
        fontSize: 15,
        marginRight: 20,
    },
    total: {
        fontSize: 15,
        color: 'rgba(34,34,34,1.0)',
        textAlign: 'right',
        textAlignVertical: 'center',
        marginRight: 20,
    },
});