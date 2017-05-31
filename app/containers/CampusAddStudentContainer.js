import React, {Component} from 'react';
import {connect} from 'react-redux';
import CampusAddStudent from '../components/CampusAddStudent';
import {addStudentToCampus} from '../action-creators/campuses';

const mapStateToProps = (state) => {
	return {
		campus: state.campuses.selected,
		students: state.students.list
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addOne(studentId) {
			dispatch(addStudentToCampus(studentId));
		}
	}
};

class CampusAddStudentContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			studentId: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		evt.preventDefault();
		let studentId = evt.target.value;
		this.setState({
			studentId: studentId
		})
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addOne(this.state.studentId);
	}

	render(){
		let studentId = this.state.studentId;
		let campus = this.props.campus;
		let students = this.props.students;

		return (
			<CampusAddStudent
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				studentId = {studentId}
				campus = {campus}
				students = {students}
			/>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CampusAddStudentContainer);