require.extensions['.css'] = function () {
  return null;
};
require.extensions['.png'] = function () {
  return null;
};
require.extensions['.jpg'] = function () {
  return null;
};

// // Register babel so that it will transpile ES6 to ES5
// // before our tests run.
// require('babel-register')();

global.localStorage = undefined;

import jsdom from 'jsdom';
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = window.navigator;