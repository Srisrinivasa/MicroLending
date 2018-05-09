import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import sampleReducer from './reducers/sampleReducer/sampleReducer.jsx';
import borrowerReducer from './reducers/borrowerReducer';
import loginReducer from './reducers/loginReducer';

const allReducers = { sampleReducer, borrowerReducer, loginReducer };

const store = createStore(combineReducers(allReducers), {}, applyMiddleware(logger, thunk));
export default store;
