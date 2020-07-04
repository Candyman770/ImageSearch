import React,{useEffect,useState} from 'react';
import axios from '../../axios';
import Photo from '../../components/photo/photo';

import classes from './photoContainer.module.css';

const PhotoContainer=props=>{
	const [photos,setPhotos]=useState([]);
	let imageSearch='';
	const pathname=props.location.pathname.split('/');
	pathname[1]==='search'?imageSearch=pathname[2]:imageSearch=pathname[1];
	useEffect(()=>{
		axios.get(`/?method=flickr.photos.search&api_key=9d72ceccbfafc498eed47be4ae259dc6&tags=${imageSearch}&per_page=24&page=1&format=json&nojsoncallback=1`)
		.then(res=>{
			//console.log(res.data.photos.photo)
			let picArray=res.data.photos.photo.map(pic=>{
				let srcPath=`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
				return <Photo key={pic.id} src={srcPath} />
			})
			setPhotos(picArray);
		})
		.catch(err=>{
			//console.log(err)
		})
	},[props.location.pathname])
	let render=<h2>Page not Found</h2>
	if(['mountain','search','beach','food','bird'].indexOf(pathname[1])!==-1){
		if(photos.length){
			render=photos
		}
		else{
			render=<p>Try searching something else</p>
		}
	}
	return (
		<div className={classes.PhotoContainer}>
			<h2><span style={{
				textTransform:'capitalize'
			}}>{imageSearch}</span> Pictures</h2>
			<div>
				<ul>
					{render}
				</ul>
			</div>
		</div>
	);
};

const pathnameIsEqual=(prevProps,nextProps)=>{
	return prevProps.location.pathname===nextProps.location.pathname;
}

export default React.memo(PhotoContainer,pathnameIsEqual);