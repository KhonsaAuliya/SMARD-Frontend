import React, { Component } from 'react';

class PerangkatDesa extends Component{
render(){
  return(
    <div className="site-section">
        <div className="container">
	        <div className="row mb-5">
	            <div className="col-12 text-center">
	              <h2 className="section-title mb-3">Village Officials</h2>
	            </div>
	        </div>

			<div className="row">
		        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
		        	<div className="h-entry">
		                <img src={require('./images/avatar.png')} align="center" alt="Image" className="img-responsive" />
		                <h2><a align="center">Ahmad bendict</a></h2>
		                <h3><a align="center">Village Head</a></h3>
		            </div> 
		        </div>

		        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
		            <div className="h-entry">
		                <img src={require('./images/avatar.png')} align="center" alt="Image" className="img-responsive" />
		                <h2><a align="center">Yuni Wiji</a></h2>
		                <h3><a align="center">Village Secretary</a></h3>
		            </div>
		        </div>
		        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
		            <div className="h-entry">
		                <img src={require('./images/avatar.png')} align="center" alt="Image" className="img-responsive" />
		                <h2><a align="center">Muhammad Anwar</a></h2>
		                <h3><a align="center">Chair of General Affairs</a></h3>
		            </div> 
		        </div>
		 
		        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
		            <div className="h-entry">
		                <img src={require('./images/avatar.png')} align="center" alt="Image" className="img-responsive" />
		                <h2><a align="center">Ahmad Ansori</a></h2>
		                <h3><a align="center">Chair of Financial Affairs</a></h3>
		            </div> 
		        </div>
		        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
		            <div className="h-entry">
		                <img src={require('./images/avatar.png')} align="center" alt="Image" className="img-responsive" />
		                <h2><a align="center">Bejo Bagus</a></h2>
		                <h3><a align="center">Chair of Planning</a></h3>
		            </div>
		        </div>
		        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
		            <div className="h-entry">
		                <img src={require('./images/avatar.png')} align="center" alt="Image" className="img-responsive" />
		                <h2><a align="center">Muhammad Anwar</a></h2>
		                <h3><a align="center">Chair of Service Section</a></h3>
		            </div> 
		        </div>      
		    </div>
		</div>
	</div>
    );
}
}

export default PerangkatDesa;