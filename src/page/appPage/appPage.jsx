import React from 'react';
import { Link, Route } from 'react-router-dom';

import BasePage from './basePage/basePage.jsx';
import AboutPage from './aboutPage/aboutPage.jsx';

const InboxPage = () => (
    <div>
        <h3>1222</h3>
    </div>
)

class AppPage extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

                <Route exact path="/" component={BasePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/inbox" component={InboxPage} />
            </div>
        );
    }
}

export default AppPage;