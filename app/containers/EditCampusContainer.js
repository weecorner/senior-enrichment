import React, {Component} from 'react';
import NewCampus from '../components/NewCampus';
import {editCampus} from '../action-creators/campuses';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    campus: state.campuses.selected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editOne (campusName) {
      dispatch(editCampus(campusName));
    }
  };
};

class EditCampusContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.campus.name,
      dirty: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    evt.preventDefault();
    let name = evt.target.value;
    this.setState({
      name: name,
      dirty: true
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.editOne(this.state.name);
  }

  render () {
    let name = this.state.name;
    let dirty = this.state.dirty;
    let warning = '';

    if (!name && dirty) {
      warning = 'You must enter a name';
    } else if (name.length > 16) {
      warning = 'The campus name is too long (limit: 16 characters)';
    }

    return (
      <NewCampus
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        name={name}
        warning={warning}
        formTitle = 'Edit Campus'
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampusContainer);