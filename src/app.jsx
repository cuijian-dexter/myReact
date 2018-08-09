import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import App from './page/appPage/appPage.jsx';

import './index.css';
import './index.scss';

ReactDOM.render(
    (<Router>
        <App>
        
        </App>
    </Router>),
    document.getElementById('app')
);