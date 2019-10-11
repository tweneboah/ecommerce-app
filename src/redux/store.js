import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../redux/reducers/root-reducer';

const middlewares = [logger];//middlewares accept are arrays. to add another middleware just put them in the array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store