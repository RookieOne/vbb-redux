import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'pages/app';
import HelloWorld from 'pages/hello-world';
import About from 'pages/about';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path="about" component={About}>
    </Route>
  </Route>
);
