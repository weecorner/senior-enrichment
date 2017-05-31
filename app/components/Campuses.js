import React from 'react';
import {Link} from 'react-router';

export default function Campuses(props) {
	const campuses = props.campuses;
	const deleteOne = props.deleteOne;

	return (
		<div>
			<h3>Campuses</h3>
			<div className="row">
				{
					campuses && campuses.map(campus => (
						<div className='col-xs-4' key={campus.id}>
							<Link className='thumbnail' to={`/campuses/${campus.id}`}>
								<div className='caption'>
									<h5>
										<span>{campus.name}</span>
									</h5>
									{/*<small>{campus.students.length} students</small>*/}
								</div>
							</Link>
							<button className='btn btn-danger' onClick={() => deleteOne(campus.id)}>Delete</button>
						</div>
						))
				}
			</div>
			<hr />
			<hr />
			<Link className='btn btn-success' to='/new-campus'>
							<span className='glyphicon glyphicon-plus' /> Add Campus
						</Link>
		</div>
		)

}