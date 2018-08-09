import React from 'react';
import ReactDOM from 'react-dom';

// 数据传递和状态提升
// 子组件的状态提升、和父子之间，子父之间和子子之间的传值

class Child1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dean Dexter',
            age: 18
        }
    }
    handClick() {
        // this.props.onBgColorChange('blue');
    }
    changeChild2Color(){
        debugger
        this.props.changeChild2Color('blue');
    }
    render() {
        return (
            <div>
                <h1>child1 {this.props.bgColor}</h1>
                <button onClick={this.handClick.bind(this)}>点击</button>
                <button onClick={this.changeChild2Color.bind(this)}>点击</button>
            </div>
        )
    }
}

class Child2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dean Dexter',
            age: 18
        }
    }
    handClick() {
        // this.props.onBgColorChange('blue');
    }
    render() {
        return (
            <div>
                <h1>child2 {this.props.bgColor}</h1>
                {/* <button onClick={this.handClick.bind(this)}>点击</button> */}
            </div>
        )
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: 'red'
        }
    }

    onBgColorChange(bgColor) {
        debugger
        this.setState({
            bgColor: bgColor
        });
    }
    render(props) {
        return (
            <div>
                {/* 
                    父传子：bgColor   
                    子传父：onBgColorChange 
                    子组件调用父传入的函数，通过参数传入子数据
                */}
                {/* <Child1 
                    bgColor={this.state.bgColor} 
                    onBgColorChange={this.onBgColorChange.bind(this)} /> 
                */}
                {/* 
                    子传子: 
                */}
                <Child1 changeChild2Color={(color) => { this.onBgColorChange(color) }} />
                <Child2 bgColor={this.state.bgColor} />
            </div>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);