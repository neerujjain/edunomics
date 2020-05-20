import {combineReducers} from 'redux';
import taskReducers from './TaskReducer'
import taskshowreducer from './taskshowreducer'

import {reducer as formReducer} from 'redux-form';
export default combineReducers({
    currenttask:taskshowreducer,
    tasks:taskReducers,
    form:formReducer
});