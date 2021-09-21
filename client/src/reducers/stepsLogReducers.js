const initialState = {
  stepsLogs: {},
  loading: false,
  error: false,
};

const stepsLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_STEPS_LOG': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'LOAD_STEPS_LOG_SUCCESS': {
      const { stepsLog } = action;
      return {
        ...state,
        stepsLogs: {
          ...state.stepsLogs,
          [stepsLog.date]: {
            ...state.stepsLogs[stepsLog.date],
            stepCount: stepsLog.stepCount
          }
        },
        loading: false,
      }
    }
    case 'LOAD_STEPS_LOG_FAILED': {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case 'CREATE_STEPS_LOG': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'CREATE_STEPS_LOG_SUCCESS': {
      const { newStepsLog } = action;
      return {
        ...state,
        stepsLogs: {
          ...state.stepsLogs,
          [newStepsLog.date]: {
            ...state.stepsLogs[newStepsLog.date],
            stepCount: newStepsLog.stepCount
          }
        },
        loading: false,
      }
    }
    case 'CREATE_STEPS_LOG_FAILED': {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    default:
      return state;
  }
};

export default stepsLogReducer;
