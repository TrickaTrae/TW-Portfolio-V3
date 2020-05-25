import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

let middleware = [thunk]

if(process.env.NODE_ENV === 'development'){
    const { logger } = require('redux-logger');
    middleware.push(logger);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;