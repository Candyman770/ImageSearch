import React from 'react';
import Header from '../header/header';
import PhotoContainer from '../photoContainer/photoContainer';
import {withRouter} from 'react-router-dom';

const Layout=props=>{
	return(
		<React.Fragment>
			<Header {...props}/>
			<main>
				{props.children}
			</main>
		</React.Fragment>
	);
};

export default withRouter(Layout);