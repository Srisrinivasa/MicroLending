import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './container/App.jsx';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app'));