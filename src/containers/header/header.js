import React,{useState} from 'react';
import Filters from '../../components/filters/filters';

import classes from './header.module.css';

const Header=props=>{
	const [controls,setControls]=useState({
		value:'',
		valid:false
	})
	const inputChangeHandler=(event)=>{
		const updatedControls={
			...controls,
			value:event.target.value,
			valid:checkValidity()
		}
		setControls(updatedControls);
	}
	const checkValidity=()=>{
		//console.log(controls.value!=='');
		return controls.value!=='';

	}
	const submitHandler=(event)=>{
		event.preventDefault();
		props.history.push(`/search/${controls.value}`);
		//window.location.reload();
	}
	return (
		<header className={classes.Header}>
			<h1>SnapShot</h1>
			<form onSubmit={submitHandler}>
				<input type="text" placeholder="Search..." onChange={(event)=>inputChangeHandler(event)}/>
				<button disabled={!checkValidity()}><i className="fa fa-search" aria-hidden="true"></i></button>
			</form>
			<Filters />
		</header>
	);
};

export default Header;