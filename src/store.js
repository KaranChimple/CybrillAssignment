import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import appReducer from './reducers/index';

console.log(appReducer);

let store = createStore(appReducer);
// let store = compose(appReducer, applyMiddleware(ReduxThunk))(createStore);

export default store;