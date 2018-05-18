import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import sampleReducer from './reducers/sampleReducer/sampleReducer.jsx';
import borrowerReducer from './reducers/borrowerReducer';
import loginReducer from './reducers/loginReducer';
import ULPReducer from './reducers/ULPReducer';
import proposalsReducer from './reducers/proposalsReducer.jsx';
import promise from 'redux-promise-middleware';

const allReducers = {
    sampleReducer, borrowerReducer, loginReducer,
    ULPReducer, proposalsReducer,
  };

const store = createStore(combineReducers(allReducers), {},
    compose(
        applyMiddleware(thunk, promise(), logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
export default store;
