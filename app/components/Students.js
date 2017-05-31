import React from 'react';
import {Link} from 'react-router';

export default function Students(props) {
	const students = props.students;
	const deleteOne = props.deleteOne;

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email Address</th>
					<th>Campus ID</th>
					<th>
						<Link className='btn btn-success' to='/new-student'>
							<span className='glyphicon glyphicon-plus' /> Add Student
						</Link>
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
								<button className='btn btn-danger' onClick={() => deleteOne(student.id)}>Delete</button>
							</td>
						</tr>
						))
				}
			</tbody>
		</table>
		)
}