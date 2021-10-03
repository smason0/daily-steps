import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { loadWeeklyStepsSuccess } from '../actions/loadWeeklyStepsSuccess';
import { loadWeeklyStepsFailed } from '../actions/loadWeeklyStepsFailed';

function getWeeklySteps(weekOfDate) {
  const url = '/api/pastWeek';

  return axios.get(url, { params: { weekOf: weekOfDate } });
};

function* loadWeeklySteps(action) {
  try {
    const response = yield call(getWeeklySteps, action.weekOfDate);

    let stepsLogs = response.data;

    yield put(loadWeeklyStepsSuccess(stepsLogs));
  } catch(error) {
    yield put(loadWeeklyStepsFailed());
  }
}

function* loadWeeklyStepsWatcher() {
  yield takeLatest('LOAD_WEEKLY_STEPS', loadWeeklySteps);
}

const loadWeeklyStepsSagas = [loadWeeklyStepsWatcher];

export default loadWeeklyStepsSagas;
