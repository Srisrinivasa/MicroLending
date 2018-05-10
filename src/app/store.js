import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import sampleReducer from './reducers/sampleReducer/sampleReducer.jsx';
import borrowerReducer from './reducers/borrowerReducer';
import loginReducer from './reducers/loginReducer';
import ULPReducer from './reducers/ULPReducer';
import ProposalReducer from './reducers/proposalsReducer.jsx';

const allReducers = { sampleReducer, borrowerReducer, loginReducer, ULPReducer, ProposalReducer };

const store = createStore(combineReducers(allReducers), {},
    compose(
        applyMiddleware(logger, thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
export default store;
