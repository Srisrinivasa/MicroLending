import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import sampleReducer from './reducers/sampleReducer/sampleReducer.jsx';

const store = createStore(combineReducers({ sampleReducer }), {}, applyMiddleware(logger, thunk));
export default store;
