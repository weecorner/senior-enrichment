import {
	RECEIVE_CAMPUSES,
	RECEIVE_CAMPUS
} from '../constants';

const initialCampusesState = {
	selected: {},
	list: [] 
};

export default function(state = initialCampusesState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_CAMPUSES: 
			newState.list = action.campuses;
			break;
		case RECEIVE_CAMPUS:
			newState.selected = action.campus;
			break;
		default: 
			return state;
	}
	return newState;
}