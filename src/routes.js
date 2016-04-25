import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'pages/app';
import HelloWorld from 'pages/hello-world';
import About from 'pages/about';
import NewSuggestion from 'pages/new-suggestion';
import Suggestions from 'pages/suggestions';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path="suggestions/new" component={NewSuggestion} />
    <Route path="suggestions" component={Suggestions} />
    <Route path="about" component={About} />
  </Route>
);
