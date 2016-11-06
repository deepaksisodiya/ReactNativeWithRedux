/**
 * Created by deepaksisodiya on 06/11/16.
 */


import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import CounterReducer from './modules/counter';
import UserReducer from './modules/user';

let rootReducer = combineReducers({CounterReducer, UserReducer});

let store = createStore(rootReducer, {}, applyMiddleware(logger()));

export default store;