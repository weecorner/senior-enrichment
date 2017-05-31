import React, {Component} from 'react';
import NewStudent from '../components/NewStudent';
import {connect} from 'react-redux';
import {addNewStudent} from '../action-creators/students';

const mapStateToProps = (state) => {
	return {
		campuses : state.campuses.list 
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addOne(firstName, lastName, email, campusId) {
			dispatch(addNewStudent(firstName, lastName, email, campusId));
		}
	}
};

class NewStudentContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			campusId: '',
			dirty: false
		};
		this.firstNameHandleChange= this.firstNameHandleChange.bind(this);
		this.lastNameHandleChange= this.lastNameHandleChange.bind(this);
		this.emailHandleChange= this.emailHandleChange.bind(this);
		this.campusIdHandleChange= this.campusIdHandleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	firstNameHandleChange(evt) {
		evt.preventDefault();
		let firstName = evt.target.value;
		this.setState({
			firstName: firstName,
			dirty: true
		});
	}

	lastNameHandleChange(evt) {
		evt.preventDefault();
		let lastName = evt.target.value;
		this.setState({
			lastName: lastName,
			dirty: true
		});
	}

	emailHandleChange(evt) {
		evt.preventDefault();
		let email = evt.target.value;
		this.setState({
			email: email,
			dirty: true
		});
	}

	campusIdHandleChange(evt) {
		evt.preventDefault();
		let campusId = evt.target.value;
		this.setState({
			campusId: campusId,
			dirty: true
		});
	}

	handleSubmit(evt){
		evt.preventDefault();
		this.props.addOne(this.state.firstName, this.state.lastName, this.state.email, this.state.campusId);
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			campusId: '',
			dirty: false
		})
	}

	render (){
		let firstName = this.state.firstName;
		let lastName = this.state.lastName;
		let email = this.state.email;
		let campusId = this.state.campusId;
		let dirty = this.state.dirty;
		let campuses = this.props.campuses;
		let warning = '';

		if (!(firstName && lastName && email && campusId)) {
			warning = 'You need to enter details for a new student.';
		}

		return (
			<NewStudent
				firstNameHandleChange = {this.firstNameHandleChange}
				lastNameHandleChange = {this.lastNameHandleChange}
				emailHandleChange = {this.emailHandleChange}
				campusIdHandleChange = {this.campusIdHandleChange}
				handleSubmit = {this.handleSubmit}
				firstName = {firstName}
				lastName = {lastName}
				email = {email}
				campusId = {campusId}
				campuses = {campuses}
				warning = {warning}
				formTitle='Add Student'
				/>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentContainer);
