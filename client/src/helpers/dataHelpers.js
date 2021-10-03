import moment from 'moment';

const DAYS_OF_WEEK = 7;

export const getSimpleDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
}

export const getSimpleStartOfWeek = (date) => {
  return moment(date).startOf('week').format('YYYY-MM-DD');
}

export const getStepsForDate = (state, date) => {
  return (
    state.stepsLogState &&
    state.stepsLogState.stepsLogs &&
    state.stepsLogState.stepsLogs[date] &&
    state.stepsLogState.stepsLogs[date].stepCount
  );
}

export const getWeeklyStepsData = (state, weekOfDate) => {
  const data = [];
  let curDate = moment(weekOfDate);

  for (let day = 0; day < DAYS_OF_WEEK; day++) {
    data.push(
      {
        date: curDate.format('ddd'),
        steps: getStepsForDate(state, getSimpleDate(curDate)) || 0
      }
    );
    curDate.add(1, 'days');
  }

  return data;
}