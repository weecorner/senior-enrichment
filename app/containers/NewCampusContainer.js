import React, {Component} from 'react';
import NewCampus from '../components/NewCampus';
import {connect} from 'react-redux';
import {addNewCampus} from '../action-creators/campuses';


const mapStateToProps = function (state) {
  return {};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewCampus(name) {
			dispatch(addNewCampus(name));
		}
	};
};

class NewCampusContainer extends Component {
	constructor(props){
		super(props);
		this.state= {
			name: '',
			dirty: false
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(evt) {
		evt.preventDefault();
		let name = evt.target.value;
		this.setState({
			name: name,
			dirty: true
		})
	};

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addNewCampus(this.state.name);
		this.setState({
			name: '',
			dirty: false
		})
	}

	render () {
		let name = this.state.name;
		let dirty = this.state.dirty;
		let warning = '';

		if (!name) {
			warning = 'You need to enter details for a new campus.';
		}

		return (
			<NewCampus 
				name = {name}
				warning = {warning}
				handleSubmit = {this.handleSubmit}
				handleChange = {this.handleChange}
				formTitle = 'Add Campus'
			/>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCampusContainer);