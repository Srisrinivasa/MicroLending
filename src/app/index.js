import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import App from './container/App.jsx';
import './index.css';
import 'font-awesome/css/font-awesome.css';

render(
<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
            </Route>
        </Router>
    </Provider>,
    window.document.getElementById('app')
);
