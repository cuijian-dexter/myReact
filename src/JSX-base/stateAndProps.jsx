import React from 'react';
import ReactDOM from 'react-dom';

// state和props的使用

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dean Dexter'
        };
    }
    render() {
        setTimeout(() => {
            this.setState({
                name: "Dean"
            })
        }, 1000);
        return <h1>I am {this.props.name}</h1>
    }
}

ReactDOM.render(
    <div>
        <Component name="John" />
    </div>,
    document.getElementById('app')
);