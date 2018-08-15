import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

class A extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Component A
                <Switch>
                    <Route exact path={`${this.props.match.path}/`}
                        render={(router) => {
                            return <div>122</div>
                        }} />
                    <Route path={`${this.props.match.path}/sub`}
                        render={(router) => {
                            return <div>111</div>
                        }} />
                    <Route path={`${this.props.match.path}/:id`}
                        render={(router) => {
                            return <div>参数:{router.match.params.id}</div>
                        }} />
                </Switch>
            </div>
        )
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>Component B</div>
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Link to="/a">组件A</Link>
            <br />
            <Link to="/a/123">组件A123</Link>
            <br />
            <Link to="/b">组件B</Link>
            <br />
            <Link to="/a/sub">1222</Link>
            {this.props.children}
        </div>
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
        </Wrapper>
    </Router>,
    document.getElementById('app')
);