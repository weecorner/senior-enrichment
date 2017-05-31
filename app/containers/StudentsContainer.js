import {connect} from 'react-redux';
import Students from '../components/Students';
import {deleteStudent} from '../action-creators/students';

const mapStateToProps = (state) => {
	return {
		students: state.students.list,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteOne(studentId) {
			dispatch(deleteStudent(studentId));
		}
	}
};


const StudentsContainer= connect(mapStateToProps, mapDispatchToProps)(Students);

export default StudentsContainer;