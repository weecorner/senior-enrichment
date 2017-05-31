import React, { Component } from 'react';
import NewStudent from '../components/NewStudent';
import { editStudent } from '../action-creators/students';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    student: state.students.selected,
    campuses: state.campuses.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editOne (studentFirstName, studentLastName, studentEmail, studentCampusId) {
      dispatch(editStudent(studentFirstName, studentLastName, studentEmail, studentCampusId));
    }
  };
};

class EditStudentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: props.student.firstName,
      lastName: props.student.lastName,
      email: props.student.email,
      campusId: props.student.campusId,
      dirty: false
    };

    this.firstNameHandleChange = this.firstNameHandleChange.bind(this);
    this.lastNameHandleChange = this.lastNameHandleChange.bind(this);
    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.campusIdHandleChange = this.campusIdHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firstNameHandleChange (evt) {
    evt.preventDefault();
    let firstNameValue = evt.target.value;
    this.setState({
      firstName: firstNameValue,
      dirty: true
    });
  }

  lastNameHandleChange (evt) {
    evt.preventDefault();
    let lastNameValue = evt.target.value;
    this.setState({
      lastName: lastNameValue,
      dirty: true
    });
  }

  emailHandleChange (evt) {
    evt.preventDefault();
    let emailValue = evt.target.value;
    this.setState({
      email: emailValue,
      dirty: true
    });
  }

  campusIdHandleChange (evt) {
    evt.preventDefault();
    let campusValue = evt.target.value;
    this.setState({
      campusId: campusValue
    });
  }

  handleSubmit (evt) {
    evt.preventDefault(); 
    this.props.editOne(this.state.firstName, this.state.lastName, this.state.email, this.state.campusId); 
  }

  render () {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let campuses = this.props.campuses;
    let campusId = this.state.campusId;
    const dirty = this.state.dirty;
    let warning = '';

    if (!firstName && !lastName && !email && dirty) {
      warning = 'You must enter details for a student';
    } else if (firstName.length > 16 ) {
      warning = 'The student\'s first name is too long (limit: 16 characters)';
    } else if (lastName.length > 16 ) {
      warning = 'The student\'s last name is too long (limit: 16 characters)';
    }

    return (
      <NewStudent
        firstNameHandleChange={this.firstNameHandleChange}
        lastNameHandleChange={this.lastNameHandleChange}
        emailHandleChange={this.emailHandleChange}
        campusIdHandleChange={this.campusIdHandleChange}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        lastName={lastName}
        email={email}
        campusId={campusId}
        campuses={campuses}
        warning={warning}
        formTitle="Edit Student"
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudentContainer);