import {
	RECEIVE_CAMPUSES,
	RECEIVE_CAMPUS
} from '../constants';


import {hashHistory} from 'react-router';
import axios from 'axios';

export const receiveCampuses = campuses => ({
	type: RECEIVE_CAMPUSES,
	campuses
});

export const receiveCampus = campus => ({
	type: RECEIVE_CAMPUS,
	campus
});

export const getCampusById = campusId => {
	return dispatch => {
		return axios.get(`/api/campuses/${campusId}`)
			.then(response =>{
				dispatch(receiveCampus(response.data));
			})
	}
};

export const addNewCampus = campusName => {
	return (dispatch, getState) => {
		return axios.post('/api/campuses', {name: campusName})
			.then(res => res.data)
			.then(campus => {
				const newListOfCampuses = getState().campuses.list.concat([campus]);
				dispatch(receiveCampuses(newListOfCampuses));
				hashHistory.push(`/campuses/${campus.id}`);
			})
	}
};

export const editCampus = (campusName) => {
	return (dispatch, getState) => {
		const selectedCampus = getState().campuses.selected;
		return axios.put(`/api/campuses/${selectedCampus.id}`, {name: campusName})
			.then(res => res.data)
			.then(campus => {
				const campuses = getState().campuses.list;
				const newListOfCampuses = campuses.map(cps => {
					return cps.id === campus.id ? campus : cps
				});
				dispatch(receiveCampuses(newListOfCampuses));
				hashHistory.push(`/campuses/${campus.id}`);
			})
	}
};

export const deleteCampus = (campusId) => {
	return (dispatch, getState) => {
		return axios.delete(`/api/campuses/${campusId}`)
			.then(() => {
				const campuses = getState().campuses.list;
				const newListOfCampuses = campuses.filter(cps => {return cps.id !== campusId});
				dispatch(receiveCampuses(newListOfCampuses));
				hashHistory.push(`/campuses`);
			})
	}
};

export const addStudentToCampus = (studentId) => {
	return (dispatch, getState) => {
		const selectedCampus= getState().campuses.selected;
		return axios.put(`/api/students/${studentId}`, {campusId: selectedCampus.id})
			.then(res => res.data)
			.then(student => {
				
				const students = selectedCampus.students;
				const newStudents = students.concat(student);
				const newSelectedCampus = Object.assign({}, selectedCampus, {students: newStudents});
				dispatch(receiveCampus(newSelectedCampus));
				hashHistory.push(`/campuses/${selectedCampus.id}`);
			})
	}
};

export const removeStudent = (studentId) => {
	return (dispatch, getState) => {
		return axios.put(`/api/students/${studentId}`, {campusId: null})
			.then(() =>{
				const selectedCampus = getState().campuses.selected;
				const students = selectedCampus.students;
				const newStudents = students.filter(st => {return st.id !== studentId});
				const newSelectedCampus = Object.assign({}, selectedCampus, {
					students: newStudents
				});
				dispatch(receiveCampus(newSelectedCampus));
			})
	}
};