import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { loadStepsLogSuccess } from '../actions/loadStepsLogSuccess';
import { loadStepsLogFailed } from '../actions/loadStepsLogFailed';

function getStepsLog(logDate) {
  const url = '/api/stepsLog';

  return axios.get(url, { params: { date: logDate } });
};

function* loadStepsLog(action) {
  try {
    const response = yield call(getStepsLog, action.logDate);

    let stepsLog = response.data;
    if (!stepsLog.stepCount) {
      stepsLog = { date: action.logDate, stepCount: 0 };
    }

    yield put(loadStepsLogSuccess(stepsLog));
  } catch(error) {
    yield put(loadStepsLogFailed());
  }
}

function* loadStepsLogWatcher() {
  yield takeLatest('LOAD_STEPS_LOG', loadStepsLog);
}

const loadStepsLogSagas = [loadStepsLogWatcher];

export default loadStepsLogSagas;
