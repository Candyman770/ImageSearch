import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';

import classes from './filters.module.css';
import PathnameContext from '../../pathname-context';

const Filters=props=>{
	const path=useContext(PathnameContext);
	const pathname=path.pathname.split('/')[1];

	return (
		<nav className={classes.Filters}>
			<ul>
				<li><NavLink to="/mountain">Mountain</NavLink></li>
				<li><NavLink to="/beach">Beaches</NavLink></li>
				<li><NavLink to="/bird">Birds</NavLink></li>
				<li><NavLink to="/food">Food</NavLink></li>
			</ul>
		</nav>
	);
};

export default Filters;