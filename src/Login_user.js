import React, { Component } from 'react';
import Landing from "./Landing";

class Login_user extends Component{
render(){
    return(
        <div className="site-section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 className="section-title mb-3">Form Login</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7 mb-5">

                <form action="/Landing" className="p-5 bg-white">
                  
                  <h2 className="h4 text-black mb-12">Login to User</h2> 

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" for="name">Username</label>
                      <input type="text" id="name" className="form-control rounded-0" />
                    </div>
                    <div className="col-md-12">
                      <label className="text-black" for="password">Password</label>
                      <input type="password" id="password" className="form-control rounded-0" />
                    </div>
                    <div className="col-md-12">
                      <label className="text-black" for="email">Email</label> 
                      <input type="email" id="email" className="form-control rounded-0" />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                  </div>

                </form>
              </div>
            </div>
        </div>
    </div>
    );
}
}

export default Login_user;