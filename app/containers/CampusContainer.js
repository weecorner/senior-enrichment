import Campus from '../components/Campus';
import {connect} from 'react-redux';
import {removeStudent} from '../action-creators/campuses';

const mapStateToProps = (state) => {
	return {
		selectedCampus :state.campuses.selected,
		selectedCampusStudents : state.campuses.selected.students || []
	}
};

const mapDispatchToProps = dispatch => {
	return {
		removeOne(student){
			dispatch(removeStudent(student))
		}
	}
}
const CampusContainer = connect(mapStateToProps, mapDispatchToProps)(Campus);

export default CampusContainer;