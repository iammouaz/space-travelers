import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsRducer from './rockets';

const reducer = combineReducers({
    rocketsRducer,
    // please add here misssions reducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
