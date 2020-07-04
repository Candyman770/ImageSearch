import React from 'react';

import classes from './photo.module.css'

const Photo=props=>{
	return (
		<li className={classes.Photo}><img src={props.src} alt="" /></li>
	);
};

export default Photo;