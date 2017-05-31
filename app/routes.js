import React from 'react';
import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import axios from 'axios';
import store from './store';
import App from './components/App';
import Campuses from './components/Campuses';
import Students from './components/Students';

import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import EditCampusContainer from './containers/EditCampusContainer';
import StudentsContainer from './containers/StudentsContainer';
import StudentContainer from './containers/StudentContainer';
import EditStudentContainer from './containers/EditStudentContainer';
import NewCampusContainer from './containers/NewCampusContainer';
import NewStudentContainer from './containers/NewStudentContainer';
import CampusAddStudentContainer from './containers/CampusAddStudentContainer';

import {receiveCampuses, getCampusById } from './action-creators/campuses';
import {receiveStudents, getStudentById} from './action-creators/students';


const onAppEnter = () => {
	const pCampuses = axios.get('/api/campuses');
	const pStudents = axios.get('/api/students');

	return Promise.all([pCampuses, pStudents])
		.then(responses => responses.map(r => r.data))
		.then(([campuses,students]) => {
			store.dispatch(receiveCampuses(campuses));
			store.dispatch(receiveStudents(students));
		})
};

const onCampusEnter = function(nextRouterState) {
	const campusId = nextRouterState.params.campusId;
	store.dispatch(getCampusById(campusId));
};;

const onStudentEnter = function(nextRouterState) {
	const studentId = nextRouterState.params.studentId;
	store.dispatch(getStudentById(studentId));
};

export default function Root (){
	return (
		<Provider store = {store}>
			<Router history = {hashHistory}>
				<Route path='/' component={App} onEnter={onAppEnter}>
					<Route path = '/campuses' component={CampusesContainer} />
					<Route path='/campuses/:campusId' component={CampusContainer} onEnter={onCampusEnter} />
					<Route path='/campuses/:campusId/edit' component={EditCampusContainer} />
					<Route path='/campuses/:campusId/students/add' component={CampusAddStudentContainer} />
					<Route path='/students' component={StudentsContainer} />
					<Route path='/students/:studentId' component={StudentContainer} onEnter={onStudentEnter} />
					<Route path='/students/:studentId/edit' component={EditStudentContainer} />
					<Route path='/new-campus' component={NewCampusContainer} />
					<Route path='/new-student' component={NewStudentContainer} />
				</Route>
			</Router>
		</Provider>
		)
}