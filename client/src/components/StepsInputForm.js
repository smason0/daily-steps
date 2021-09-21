import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { loadStepsLog } from '../actions/loadStepsLog';
import { createStepsLog } from '../actions/createStepsLog';
import { isValidInteger } from '../helpers/numberHelpers';

const useStyles = makeStyles((theme) => ({
  submitButton: {
    margin: theme.spacing(1),
    display: 'flex'
  }
}));

const StepsInputForm = ({ logDate, stepCount, isLoading }) => {
  const [count, setCount] = useState('');
  const [inputError, setInputError] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const resetInput = () => {
    setCount('');
    setInputError(false);
  }

  useEffect(() => {
    if (stepCount === undefined) {
      dispatch(loadStepsLog(logDate));
    }
    resetInput();
  }, [dispatch, logDate, stepCount]);

  const submitSteps = () => {
    if (isValidInteger(count)) {
      dispatch(createStepsLog({ date: logDate, stepCount: count }));
      setCount('');
    } else {
      setInputError(true);
    }
  }

  const handleInputChange = (event) => {
    setCount(event.target.value);
    if (inputError) {
      setInputError(false);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitSteps();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitSteps();
  }

  return (
    <>
      <TextField
        variant="outlined"
        value={count}
        type="text"
        label="Enter Steps"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        error={inputError}
        helperText={inputError ? 'Please enter a valid number.' : null}
        disabled={isLoading}
      />
      <Button
        className={classes.submitButton}
        variant="contained"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Submit
      </Button>
    </>
  )
}

export default StepsInputForm;
