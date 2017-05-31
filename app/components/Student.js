import React from 'react';
import {Link} from 'react-router';

export default function Student(props) {
	const student = props.selectedStudent;

	return (
		<div>
			<div className='centered'>
				<h2>Student Info: </h2>
			</div>
			<table className='table'>
				<tbody>
					<tr>
						<td>First Name: </td><td>{student.firstName}</td>
					</tr>
					<tr>
						<td>Last Name: </td><td>{student.lastName}</td>
					</tr>
					<tr>
						<td>Email Address: </td><td>{student.email}</td>
					</tr>
					<tr>
						<td>Campus ID: </td><td><Link to={`/campuses/${student.campusId}`}>{student.campusId}</Link></td>
					</tr>
				</tbody>
			</table>
			<Link className='btn btn-default' to={`/students/${student.id}/edit`}>Edit</Link>
		</div>

		)
} 