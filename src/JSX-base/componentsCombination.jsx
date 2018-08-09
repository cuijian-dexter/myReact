import React from 'react';
import ReactDOM from 'react-dom';

// 单纯的组件和容器式组件

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dean Dexter',
            age: 18
        }
    }
    handClick() {
        this.setState({
            age: ++this.state.age
        });
    }
    inputKeyup(e) {
        this.setState({
            age: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p> I am {this.state.age} years old</p>
                <button onClick={this.handClick.bind(this)}>点击</button>
                <button onClick={() => { this.handClick() }}>点击</button>
                <input type="text" onKeyUp={(e) => { this.inputKeyup(e) }} />
            </div>
        )
    }
}

class Title extends React.Component {
    render(props) {
        return <h1>I am {this.props.children}</h1>
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="">
                {/* 容器式组件 */}
                <Title>
                    <span>App Span</span>
                    <a href="">Link</a>
                </Title>
                {/*单纯组件*/}
                <Component />
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);