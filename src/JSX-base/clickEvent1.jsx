import React from 'react';
import ReactDOM from 'react-dom';

// 事件的使用

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
                <input type="text" onKeyUp={(e)=>{this.inputKeyup(e)}} />
            </div>
        )
    }
}

ReactDOM.render(
    <Component name="John" />,
    document.getElementById('app')
);