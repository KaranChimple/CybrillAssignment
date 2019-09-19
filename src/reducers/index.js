import {combineReducers} from 'redux';
import TrackerReducer from './trackerReducer';

export default combineReducers({
    tracker: TrackerReducer
});