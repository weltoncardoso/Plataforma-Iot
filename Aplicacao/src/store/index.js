import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Modulos/rootReducer';

const store = createStore(rootReducer);

export default store;
