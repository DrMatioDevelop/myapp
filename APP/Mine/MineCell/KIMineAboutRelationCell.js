import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class KIMineAboutRelationCell extends React.Component {
    render() {
        var item = this.props.rowData.list;
        return (
            <View style={styles.container}>
                <View style={[styles.container, { flex: 1 }]}>
                    <View style={styles.badgeItem}>
                        <Text style={styles.title}>{item[0].title}
                        </Text>
                        <View style={styles.badgeView} >
                            <Text style={styles.badgeText}>{item[0].badge > 9 ? '9+' : item[0].badge}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.container, { flex: 1 }]}>
                    <View style={styles.badgeItem}>
                        <Text style={styles.title}>{item[1].title}
                        </Text>
                        <View style={styles.badgeView} >
                            <Text style={styles.badgeText}>{item[1].badge > 9 ? '9+' : item[1].badge}</Text>
                        </View>
                    </View>
                </View>
            </View >

        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    badgeItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    badgeView: {
        width: 16,
        height: 16,
        marginLeft: -5,
        marginTop: -8,
        backgroundColor: 'red',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        width: 16,
        height: 16,
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'red',
        borderRadius: 8,
    },
    title: {
        fontSize: 15,
        color: 'black'
    },

});