import React, { useEffect } from "react";
import {Route,withRouter,Redirect} from 'react-router-dom';

import Layout from './containers/layout/layout';
import PhotoContainer from './containers/photoContainer/photoContainer';
import PathnameContext from './pathname-context';

const App=props=>{
  //console.log(props.location);
  return (
  	<PathnameContext.Provider value={{
  		pathname:props.location.pathname
  	}} >
    <Layout >
      {props.location.pathname==='/'?<Redirect to='/mountain' />:null}
      <Route path='/' component={PhotoContainer} />
    </Layout>
    </PathnameContext.Provider>
  );
}

export default withRouter(App);
