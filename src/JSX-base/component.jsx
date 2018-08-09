import React from 'react';
import ReactDOM from 'react-dom';

// 组件

function Component() {
    return <h1>I am Dean</h1>
}

class ES6Component extends React.Component {
    render() {
        return <h1>I am Dean Dexter</h1>
    }
}

ReactDOM.render(
    <div>
        <Component />>
        <ES6Component />
    </div>,
    document.getElementById('app')
);