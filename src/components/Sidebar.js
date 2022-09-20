import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'


 const Sidebar = () => {
  return (
			<div className='sidebar'>
				<ul className=' list-unstyled '>
					<li>
						<Link to='products'>Get All Products</Link>
					</li>
					<li>
						<Link to='categories'>Get All Categories</Link>
					</li>
				</ul>
			</div>
		);
}

export default Sidebar;
