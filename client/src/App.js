import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Grid, Typography, Paper, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';

import StepsInputForm from './components/StepsInputForm';
import StepsDisplay from './components/StepsDisplay';
import StepsChart from './components/StepsChart';
import footprints from './images/footprints.png';
import { getSimpleDate, getSimpleStartOfWeek, getStepsForDate, getWeeklyStepsData } from './helpers/dataHelpers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
  titleBar: {
    borderRadius: 5,
    margin: '10px 0',
    width: '30ch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCEFFA'
  },
  titleImg: {
    marginLeft: '10px'
  },
  paper: {
    height: '100%',
    width: '30ch',
    paddingTop: 0,
    backgroundColor: '#DCEFFA'
  }
}));

const App = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const classes = useStyles();

  const logDate = getSimpleDate(selectedDate);
  const weekOfDate = getSimpleStartOfWeek(selectedDate);
  const stepCount = useSelector((state) => getStepsForDate(state, logDate));
  const weeklySteps = useSelector((state) => getWeeklyStepsData(state, weekOfDate));
  const loading = useSelector((state) => state.stepsLogState?.loading);

  return (
    <Grid className={classes.root} container align="center" spacing={2}>
      <Grid item xs={12}>
        <AppBar position="static" className={classes.titleBar} color='inherit'>
          <Typography variant="h4">Daily Steps</Typography>
          <img className={classes.titleImg} src={footprints} alt="footprints" height="30" />
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={5}>
          <Grid item xs={12}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
              autoOk
              format="EEE, MMM dd, yyyy"
            />
          </Grid>
          <Grid item xs={12}>
            <StepsDisplay stepCount={stepCount} isLoading={loading} />
          </Grid>
          <Grid item xs={12}>
            <StepsInputForm logDate={logDate} stepCount={stepCount} isLoading={loading} />
          </Grid>
          <Grid item xs={12}>
            <StepsChart logDate={logDate} weekOfDate={weekOfDate} weeklySteps={weeklySteps} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
