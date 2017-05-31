import Student from '../components/Student';
import {connect} from 'react-redux';
import {editStudent} from '../action-creators/students';

const mapStateToProps = (state) => {
	return {
		selectedStudent : state.students.selected 
	}
};

const mapDispatchToProps = dispatch => {
	return {
		editOne(student) {
			dispatch(editStudent(student));
		}
	}
};

const StudentContainer = connect(mapStateToProps, mapDispatchToProps)(Student);

export default StudentContainer;