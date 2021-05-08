import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import persistedReducer from './persistRedurcers';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};