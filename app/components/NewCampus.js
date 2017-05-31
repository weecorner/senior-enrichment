import React from 'react';

export default function NewCampus(props) {
	const name = props.name;
	
	const warning = props.warning;
	const handleChange = props.handleChange;
	const handleSubmit = props.handleSubmit;
	const formTitle = props.formTitle;

	return (
		<div>
			<form className='form-horizontal' onSubmit = {handleSubmit}>
				<fieldset>
					<legend>{formTitle}</legend>
					{warning && <div className='alert alert-warning'>{warning}</div>}
					<div className='form-group'>
						<lable className='col-xs-2 control-lable'>Campus Name</lable>
						<div className='col-xs-10'>
							<input
								className='form-control'
								name='name'
								placeholder='Campus Name'
								type='text'
								onChange={handleChange}
								value={name}
							/>
						</div>
					</div>
					<div className='form-group'>
						<div className='col-xs-10 col-xs-offset-2'>
							<button
								type='submit'
								className='btn btn-success'
								disabled={ !!warning || !name}>
								Submit
							</button>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
		)
}