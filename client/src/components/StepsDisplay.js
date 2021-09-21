import React from 'react';

import { Typography, CircularProgress } from "@material-ui/core";

import { formatNumberDisplay } from '../helpers/numberHelpers';

const StepsDisplay = ({ stepCount, isLoading }) => {
  const displayContent = 
    (isNaN(stepCount) || isLoading) ?
      <CircularProgress /> : (
        <>
          <Typography variant="h4" align="center">{formatNumberDisplay(stepCount)}</Typography>
          <Typography variant="h6" align="center">steps</Typography>
        </>
      );

  return (
    <div style={{ height: '5rem', display: 'table-cell', verticalAlign: 'middle' }} >
      {displayContent}
    </div>
  );
};

export default StepsDisplay;
