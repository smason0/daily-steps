import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import App from './App';
import store from './store/store';
import './index.css';

function StepsApp() {
  return (
    <Provider store={store} >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </Provider> 
  );
}

ReactDOM.render(<StepsApp />, document.getElementById('root'));
