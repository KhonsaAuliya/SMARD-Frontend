import React, { Component } from 'react';
import { NavLink, Route, HashRouter} from 'react-router-dom';
import App from "./App";

class Logout extends Component{
render(){
    return(
    	<HashRouter>
    	<div className="header">
    		<p><NavLink to="/App"></NavLink></p>
    	</div>
    	<div className="content">
            <Route path="/app" component={App} />
    	</div>
    	</HashRouter>
    	);
	}
}

export default Logout;