import React from 'react';
import {View, Text, Image} from 'react-native';

export default class KIEmptyPage1 extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle:navigation.state.params.title,
    });
        
    render () {
        return(
            <View style={{backgroundColor:'#CCC', flex:1}}>
                <Text style={{alignItems:'center'}}>{this.props.navigation.state.params.title}</Text>
            </View>

        );
    }

}