import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

class menu extends Component {
	constructor(){
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }
	render(){
		return(
			<div className="site-wrap"  id="home-section">

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
     
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col-12 text-center mb-4 mt-5">
              <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">Smart Desa<span className="text-primary">.</span> </a></h1>
            </div>
        </div>
      </div>

      <header className="site-navbar py-md-4 js-sticky-header site-navbar-target" role="banner">

        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-6 col-md-6 col-xl-2  d-block d-lg-none">
              <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">Smart Desa<span className="text-primary">.</span> </a></h1>
            </div>

            <div className="col-12 col-md-10 main-menu">
              <nav className="site-navigation position-relative text-right" role="navigation">

                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><a href="#home-section" className="nav-link">Home</a></li>
                  <li><a href="#features-section" className="nav-link">Features</a></li>

                  <li className="has-children">
                    <div className="button" onClick={this.showDropdownMenu}>Data Penduduk</div>
                      { this.state.displayMenu ? (
                        <ul className="dropdown arrow-top">
                          <li><a className="active" href="#DataPenduduk">Berdasarkan Jenis Kelamin</a></li>
                          <li><a href="#Agama">Berdasarkan Agama</a></li>
                          <li><a href="#Status">Berdasarkan Status</a></li>
                          <li><a href="#Pendidikan">Berdasarkan Pendidikan</a></li>
                          <li><a href="#Pekerja">Berdasarkan Pekerjaan</a></li>
                        </ul>
                        ):
                        (
                        null 
                        )
                      }
                  </li>

                  <li><a href="#about-section" className="nav-link">History</a></li>
                  <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                  <li><a href="#blog-section" className="nav-link">News</a></li>
                  <li><a href="#contact-section" className="nav-link">Complaint</a></li>
                  
                  <li className="has-children">
                    <div className="button" onClick={this.showDropdownMenu}>Login</div>
                      { this.state.displayMenu ? (
                        <ul className="dropdown arrow-top">
                          <li><a className="active" href="#Login_user">User</a></li>
                          <li><a href="#Login">Villager</a></li>
                          <li><a href="#Employees">Employees</a></li>
                        </ul>
                        ):
                        (
                        null 
                        )
                      }
                  </li>
                </ul>
              </nav>
            </div>

            <div className="content">
              <Route path="/login_user" component={Login_user} />
              <Route path="/login" component={Login} />
              <Route path="/employees" component={ Employees} />
              <Route path="/perangkatDesa" component={PerangkatDesa} />
              <Route path="/keuangan" component={Keuangan} />
              <Route path="/peraturanDesa" component={PeraturanDesa} />
              <Route path="/dataPenduduk" component={DataPenduduk} />
              <Route path="/agama" component={Agama} />
              <Route path="/status" component={Status} />
              <Route path="/pendidikan" component={Pendidikan} />
              <Route path="/pekerja" component={Pekerja} />
              <Route path="/programKerja" component={ProgramKerja} />
              <Route path="/surat_online" component={Surat_online} />
            </div>

            <div className="col-6 col-md-6 d-inline-block d-lg-none ml-md-0" >
            <a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>
          </div>
        </div>
      </header>
		);
	}
}

export default menu;