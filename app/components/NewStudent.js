import React from 'react';

export default function NewStudent(props) {
	const firstNameHandleChange = props.firstNameHandleChange;
	const lastNameHandleChange = props.lastNameHandleChange;
	const emailHandleChange = props.emailHandleChange;
	const campusIdHandleChange = props.campusIdHandleChange;
	const handleSubmit = props.handleSubmit;
	const firstName = props.firstName;
	const lastName = props.lastName;
	const email = props.email;
	const campusId = props.campusId;
	const dirty = props.dirty;
	const campuses = props.campuses;
	const warning = props.warning;
	const formTitle = props.formTitle;

	return (
		<div>
			<form className='form-horizontal' onSubmit = {handleSubmit}>
				<fieldset>
					<legend>{formTitle}</legend>
					{warning && <div className='alert alert-warning'>{warning}</div>}
					<div className='form-group'>
						<lable className='col-xs-2 control-lable'>First Name</lable>
						<div className='col-xs-10'>
							<input
								className='form-control'
								type='text'
								onChange={firstNameHandleChange}
								value={firstName}
							/>
						</div>
					</div>
					<div className='form-group'>
						<lable className='col-xs-2 control-lable'>Last Name</lable>
						<div className='col-xs-10'>
							<input
								className='form-control'
								type='text'
								onChange={lastNameHandleChange}
								value={lastName}
							/>
						</div>
					</div>
					<div className='form-group'>
						<lable className='col-xs-2 control-lable'>Email Address</lable>
						<div className='col-xs-10'>
							<input
								className='form-control'
								type='text'
								onChange={emailHandleChange}
								value={email}
							/>
						</div>
					</div>
					<div className='form-group'>
						<lable className='col-xs-2 control-lable'>Campus</lable>
						<div className='col-xs-10'>
							<select
								className='form-control'
								name = 'campus'
								value = {campusId}
								onChange = {campusIdHandleChange}>
								<option key='0' value = ''>None</option>
								{
									campuses && campuses.map(campus => (
										<option key={campus.id} value = {campus.id} > {campus.name}</option>
										))
								}
							</select>
						</div>
					</div>
					<div className='form-group'>
						<div className='col-xs-10 col-xs-offset-2'>
							<button
								type='submit'
								className='btn btn-success'
								disabled={ !!warning }>
								Submit
							</button>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
		)
}