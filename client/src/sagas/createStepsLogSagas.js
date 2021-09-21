import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { createStepsLogSuccess } from '../actions/createStepsLogSuccess';
import { createStepsLogFailed } from '../actions/createStepsLogFailed';

function postCreateLog(stepsLog) {
  const url = '/api/createLog';

  return axios.post(url, stepsLog);
};

function* createStepsLog(action) {
  try {
    const response = yield call(postCreateLog, action.stepsLog);

    yield put(createStepsLogSuccess(response.data));
  } catch(error) {
    yield put(createStepsLogFailed());
  }
}

function* createStepsLogWatcher() {
  yield takeLatest('CREATE_STEPS_LOG', createStepsLog);
}

const createStepsLogSagas = [createStepsLogWatcher];

export default createStepsLogSagas;
