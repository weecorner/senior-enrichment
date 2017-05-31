import {
	RECEIVE_STUDENTS,
	RECEIVE_STUDENT
} from '../constants';


import {hashHistory} from 'react-router';
import axios from 'axios';

export const receiveStudents = students => ({
	type: RECEIVE_STUDENTS,
	students
});

export const receiveStudent = student => ({
	type: RECEIVE_STUDENT,
	student
});

export const getStudentById = studentId => {
	return dispatch => {
		return axios.get(`/api/students/${studentId}`)
			.then(response => {
				dispatch(receiveStudent(response.data));
			})
	}
};

export const addNewStudent = (studentFirstName, studentLastName, studentEmail, studentCampusId) => {
	return (dispatch, getState) => {
		return axios.post(`/api/students`, {firstName: studentFirstName, lastName: studentLastName, email: studentEmail, campusId: studentCampusId})
		.then(res => res.data)
		.then(newStudent => {
			const newListOfStudents = getState().students.list.concat([newStudent]);
			dispatch(receiveStudents(newListOfStudents));
			dispatch(receiveStudent(newStudent));
			hashHistory.push(`/students/${newStudent.id}`);
		})
	}
};

export const editStudent = (studentFirstName, studentLastName, studentEmail, studentCampusId) => {
	return (dispatch, getState) => {
		const selectedStudent = getState().students.selected;
		return axios.put(`/api/students/${selectedStudent.id}`, {firstName: studentFirstName, lastName: studentLastName, email: studentEmail, campusId: studentCampusId})
			.then(res => res.data)
			.then(editedStudent => {
				const students = getState().students.list;
				const newListOfStudents = students.map(st => {return st.id === editedStudent.id ? editedStudent : st})
				dispatch(receiveStudents(newListOfStudents));
				hashHistory.push(`/students/${editedStudent.id}`);
			})
	}
};

export const deleteStudent = (studentId) => {
	return (dispatch, getState) => {
		return axios.delete(`/api/students/${studentId}`)
			.then(()=>{
				const students = getState().students.list;
				const newStudents = students.filter(st => {return st.id !== studentId});
				dispatch(receiveStudents(newStudents));
			})
	}
} ;