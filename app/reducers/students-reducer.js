import {
	RECEIVE_STUDENTS,
	RECEIVE_STUDENT
} from '../constants';

const initialStudentsState = {
	selected: {},
	list: [] 
};

export default function(state = initialStudentsState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_STUDENTS: 
			newState.list = action.students;
			break;
		case RECEIVE_STUDENT:
			newState.selected = action.student;
			break;	
		default: 
			return state;
	}
	return newState;
}