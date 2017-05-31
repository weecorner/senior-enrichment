import React from 'react';
import {Link} from 'react-router';

export default function Sidebar (props) {

	return (
		<sidebar>
			<section>
				<h4 className="menu-item">
					<Link to='/campuses'>CAMPUSES</Link>
				</h4>
			</section>
			<hr />
			<section>
				<h4 className="menu-item">
					<Link to='/students'>STUDENTS</Link>
				</h4>
			</section>
		</sidebar>
		)
}