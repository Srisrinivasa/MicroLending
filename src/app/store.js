import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import sampleReducer from './reducers/sampleReducer/sampleReducer.jsx';
import borrowerReducer from './reducers/borrowerReducer';

const store = createStore(combineReducers({ sampleReducer, borrowerReducer }), {}, applyMiddleware(logger, thunk));
export default store;
