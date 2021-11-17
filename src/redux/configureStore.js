/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsRducer from './rockets';
import MissionReducer from './missions';

const reducer = combineReducers({
  rocketsRducer,
  MissionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
