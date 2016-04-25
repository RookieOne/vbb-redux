import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'styles/app.scss';
import configureStore from 'configure-store';

const store = configureStore({}, browserHistory);
const history = browserHistory;

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
