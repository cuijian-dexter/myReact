import React from 'react';
class BasePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Herry' };
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState((prevState, prevProps) => ({
            name: 'Helen'
        }));
    }

    render() {
        return (
            <div>
                <i className="fa fa-address-book"></i>
                <h1 onClick={this.onClick}>Hello, {this.state.name}</h1>
            </div>
        );
    }
}

// BasePage.defaultProps = {
//     name: 'Runoob'
// };
export default BasePage;