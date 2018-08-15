import React from 'react';
import ReactDOM from 'react-dom';
//生命周期

class Component extends React.Component {
    //构造
    constructor(props) {
        super(props);
        this.state = {
            data: 'Old Data'
        };
        console.log('child constructor');
    }
    //将要加载
    componentWillMount() {
        console.log('componentWillMount');
    }
    //加载完成
    componentDidMount() {
        console.log('componentDidMount');
    }
    //已加载组件收到父组件的新参数时调用
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    //判断是否重新渲染后调用，子组件是不是应该更新
    //默认返回true为执行后面的更新操作，返回false为不执行后面的更新操作
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    //将要被更新
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    //组件更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    //组件将要销毁
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    //点击事件
    handleClick() {
        this.setState({
            data: 'new Data'
        })
    }
    //渲染事件
    render() {
        console.log('render');
        return (
            <div>
                <div>App</div>
                <div>props：{this.props.data}</div>
                <button onClick={() => { this.handleClick() }}>更新</button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Old Props',
            hasChild: true
        };
        console.log('props ' + 'constructor');
    }
    onPropsClick() {
        this.setState({
            data: 'New Props'
        })
    }
    onDeleteChildClick(){
        console.log('销毁子组件')
        this.setState({
            hasChild: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.hasChild ? <Component data={this.state.data} /> : null
                }
                <button onClick={() => this.onPropsClick()}>改变props</button>
                <button onClick={() => this.onDeleteChildClick()}>删除子组件</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);