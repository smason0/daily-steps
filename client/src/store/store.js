import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import stepsLogReducer from '../reducers/stepsLogReducers';
import loadStepsLogSagas from '../sagas/loadStepsLogSagas';
import createStepsLogSagas from '../sagas/createStepsLogSagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<any, any> = createStore(
  combineReducers({ stepsLogState: stepsLogReducer }),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export default store;

const sagas = [...loadStepsLogSagas, ...createStepsLogSagas];

sagas.map(saga => sagaMiddleware.run(saga));
