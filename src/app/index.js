import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as borrowerActions from './actions/borrowerAction';
import store from './store';
import App from './container/App/App.jsx';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import Home from './components/Home/Home';
import DashBoard from './components/UserPages/DashBoard/DashBoard.jsx';

render(
<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Home} />
            </Route>
            <Route path="/dashBoard" component={DashBoard} />
        </Router>
    </Provider>,
    window.document.getElementById('app')
);
