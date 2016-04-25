import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { vbb } from './vbb';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  vbb: vbb,
});

export default rootReducer;
