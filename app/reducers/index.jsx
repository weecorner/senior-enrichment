import { combineReducers } from 'redux'
import campusesReducer from './campuses-reducer';
import studentsReducer from './students-reducer';

export default combineReducers({
	campuses: campusesReducer,
	students: studentsReducer
});