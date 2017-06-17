import React from 'react';
import { View, Text, Button } from 'react-native';

class Note extends React.Component {
    constructor(props) {
        super(props);
    };

    /**
    * 设置this.props的初始值
    * 
    * @type{value:string}
    */
    static defaultProps = { value: 'this is default props' }

    /**
     * 设置this.state的初始值
     */
    state = { value: 'this is a initial state.' }

    /**
     * 组件创建 初始化了状态 整个生命周期只会调用一次  可以做业务初始化操作
     */
    componentWillMount() {
        console.log('componentWillMount');
    }

    /**
     * 渲染组件  会在状态或者属性 改变的时候进行渲染
     */
    render() {
        console.log('render');
        return (
            <View>
                <Text>属性初始值:{this.props.value} 状态初始值:{this.state.value}</Text>
                <Button title='改变状态' onPress={() => {
                    this.setState({ value: 'i change' })
                }}></Button>
            </View>
        );
    }


    /**
     * 只会调用一次
     * 虚拟DOM已经渲染完成 可以获取元素或者子组件  RN会优先调用子组件的此方法。
     * 从这个方法开始 可以和JS框架进行交互  设置定时器 发起网络请求
     */
    componentDidMount() {
        console.log('componentDidMount');
    }
    /**
     * 组件收到新的属性  可以通过nextValue获取以前的属性
     * 通过this.setState来更新组件的状态 在这里调用是安全的 不会触发render的更新
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps ' + nextProps.value);
    }
    /**
     * 组件接受到属性或者状态的改变  会触更新 默认返回true 
     * 提高性能：重载这个函数，通过检测变换前后的属性和状态，来决定UI是否需要更新       
     * @param {属性} nextProps 
     * @param {状态} nextState 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate ' + nextProps.value + ' ' + nextState.value + ' ' + this.state.value);
        return true;
    }

    /**
     * render 更新完成之后 会调用本方法的到通知  这里已经完成了属性与状态的通知所以入参 变为了prev
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate ' + prevProps.value + ' ' + prevState.value);
    }
    /**
     * 组件从界面上移除 会调用此方法
     */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

/**
 * 空白页面  or  测试声明周期函数
 */
export default class KIEmptyPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
    });

    state = { value: 'from parent' };
    render() {
        console.log('-------'+this.props);
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Note {...this.state} />
                <Button title='改变props' onPress={() => { this.setState({ value: 'changed' }) }}></Button>
                <Button title='childPage' onPress={() => { this.props.navigation.navigate('KIEmptyPage1', { title: '测试页面' }) }}></Button>

                <View style={{marginTop:20,height:200,backgroundColor:'rgba(230,230,230,1.0)'}}>
                    <Button title='返回上一级' style={{color:'red' ,backgroundColor:'white'}} 
                    onPress={()=>{
                        this.props.navigation.state.params.customGoBack('从 【'+this.props.navigation.state.params.title+'】 返回'),
                        this.props.navigation.goBack()
                        }}/>
                </View>
            </View>

        );
    }

    componentWillUnmount() {
        this.props.navigation.state.params.customGoBack('从 【'+this.props.navigation.state.params.title+'】 返回');
    }


    //  render() {
    //     return (
    //         <View style={{ flex: 1, backgroundColor: 'white' }}>
    //             <Text style={{ color: 'red', fontSize: 15, textAlign: 'center' }}>
    //                 {this.props.navigation.state.params.title}
    //             </Text>
    //         </View>
    //     );
    // }

}

