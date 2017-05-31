import React from 'react';
import {Link} from 'react-router';


export default function Campus(props) {
	const campus = props.selectedCampus;
	const students = props.selectedCampusStudents;
	const removeOne = props.removeOne;


	return (
		<div className='campus'>
			<div>
				<h3>{campus.name}</h3>
				<h4>{`Number of Enrolled Students: ${students.length}`}</h4>
				<Link className='btn btn-default' to={`/campuses/${campus.id}/edit`}>Edit</Link>
			</div>
			<h2>Enrolled Students: </h2>
			<table className='table'>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email Address</th>
					<th>Campus ID</th>
					<th>
						{/*<Link className='btn btn-success add-new' to='/new-student'>
							<span className='glyphicon glyphicon-plus' /> Add Student
						</Link>*/}
					</th>
				</tr>
			</thead>
			<tbody>
				{
					students && students.map(student => (
						<tr key={student.id}>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{student.email}</td>
							<td>{student.campusId}</td>
							<td>
								<Link className='btn btn-info' to={`/students/${student.id}`}>View</Link>
								<button className='btn btn-danger' onClick={() => removeOne(student.id)}>Delete</button>
							</td>
						</tr>
						))
				}
			</tbody>
		</table>
		<hr />
		<hr />
		<h2><Link className='btn btn-success' to={`campuses/${campus.id}/students/add`}>Add Student</Link></h2>

		
			
		</div>


		)
}