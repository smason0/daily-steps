import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CircularProgress } from "@material-ui/core";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

import { loadWeeklySteps } from '../actions/loadWeeklySteps';

const StepsChart = ({ logDate, weekOfDate, weeklySteps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWeeklySteps(weekOfDate));
  }, [dispatch, weekOfDate]);

  return (
    weeklySteps ? (
      <Chart data={weeklySteps} >
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="steps" argumentField="date" />
      </Chart>
    ) : <CircularProgress />
  );
};

export default StepsChart;
