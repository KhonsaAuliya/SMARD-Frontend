import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import PerangkatDesa from "./PerangkatDesa";
import Keuangan from "./Keuangan"; 
import PeraturanDesa from "./PeraturanDesa";
import DataPenduduk from "./DataPenduduk";
import ProgramKerja from "./ProgramKerja";
import Surat_online from "./Surat_online";
import Logout from "./Logout";


class App extends Component {
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
  render() {
    return (
      <HashRouter>
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

                  <li><a href="#about-section" className="nav-link">History</a></li>
                  <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                  <li><a href="#blog-section" className="nav-link">News</a></li>
                  <li><a href="#contact-section" className="nav-link">Complaint</a></li>
                  <li className="has-children">
                    <div className="button" onClick={this.showDropdownMenu}>User</div>
                      { this.state.displayMenu ? (
                        <ul className="dropdown arrow-top">
                          <li><a className="active">Email</a></li>
                          <li><a>Info</a></li>
                          <li><a href="#Logout">Logout</a></li>>
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
              <Route path="/logout" component={Logout} />
              <Route path="/perangkatDesa" component={PerangkatDesa} />
              <Route path="/keuangan" component={Keuangan} />
              <Route path="/peraturanDesa" component={PeraturanDesa} />
              <Route path="/dataPenduduk" component={DataPenduduk} />
              <Route path="/programKerja" component={ProgramKerja} />
              <Route path="/surat_online" component={Surat_online} />
            </div>

            <div className="col-6 col-md-6 d-inline-block d-lg-none ml-md-0" >
            <a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>
          </div>
        </div>
      </header>

      <div className="site-blocks-cover">
        <div className="container">
          <div className="row align-items-center justify-content-center">

            <div className="col-md-12" data-aos="fade-up">
              
              <img src={require('./images/landing_1.png')} alt="Image" className="img-fluid img-absolute" />

              <div className="row mb-4">
                <div className="col-lg-4 mr-auto">
                  <h1>Smart Desa</h1>
                  <p className="mb-5">Menuju Masyarakat Digital</p>
                  <div>
                    <a href="#" className="btn btn-primary mr-2 mb-2">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  


      <div className="site-section bg-light" id="features-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">Features</h2>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              
              <div className="unit-4 d-block">
                <div className="unit-4-icon mb-3">
                  <span className="icon-wrap"><span className="text-primary icon-autorenew"></span></span>
                </div>
                <div>
                  <h3>Village Officials</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><NavLink to="/PerangkatDesa">Read More</NavLink></p>
                </div>
              </div>

            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">

              <div className="unit-4 d-block">
                <div className="unit-4-icon mb-3">
                  <span className="icon-wrap"><span className="text-primary icon-dollar"></span></span>
                </div>
                <div>
                  <h3>Financial</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><NavLink to="/Keuangan">Read More</NavLink></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" >
              <div className="unit-4 d-block">
                <div className="unit-4-icon mb-3">
                  <span className="icon-wrap"><span className="text-primary icon-work"></span></span>
                </div>
                <div>
                  <h3>Work Program</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><NavLink to="/ProgramKerja">Read More</NavLink></p>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div className="unit-4 d-block">
                <div className="unit-4-icon mb-3">
                  <span className="icon-wrap"><span className="text-primary icon-settings"></span></span>
                </div>
                <div>
                  <h3>Village Regulations</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><NavLink to="/PeraturanDesa">Read More</NavLink></p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div className="unit-4 d-block">
                <div className="unit-4-icon mb-3">
                  <span className="icon-wrap"><span className="text-primary icon-folder"></span></span>
                </div>
                <div>
                  <h3>Village Population Data</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><NavLink to="/DataPenduduk">Read More</NavLink></p>
                </div>
              </div>

              
            </div>
            
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div className="unit-4 d-block">
                <div className="unit-4-icon mb-3">
                  <span className="icon-wrap"><span className="text-primary icon-envelope"></span></span>
                </div>
                <div>
                  <h3>Submission of Letters</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><NavLink to="/surat_online">Read More</NavLink></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="feature-big">
        <div className="container">
          <div className="row mb-5 site-section border-bottom">
            <div className="col-lg-7">
              <img src={require('./images/person_3.jpg')} alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
              <h2 className="text-black">Welcome From The Village Head</h2>
              <p className="mb-4">Assalamu'alaikum Wr.Wb <br/>
              Praise us for the supreme presence of God, because of the abundance of mercy and blessing we can all gather together to attend this event in good health and not lacking in any one thing.<br/>
              Wassalamu'alaikum Wr.Wb </p>
              <div>
                <a href="#" className="btn btn-primary mr-2 mb-2">About Us</a>
              </div>
            </div>
          </div>

          <div className="mt-5 row mb-5 site-section ">
            <div className="col-lg-7 order-1 order-lg-2">
              <img src={require('./images/do_ui_kit_hero_floating_devices-2x.png')} alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
              <h2 className="text-black">Vision & Mision</h2>
              <p className="mb-4">Towards a religiously devoted digital society</p>
              <ul className="ul-check mb-5 list-unstyled success">
                <li>Increase the comfort of the people</li>
                <li>Creating a harmonious and harmonious life</li>
                <li>Together realize justice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="site-section bg-light" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">History</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-6">
              <img src={require('./images/about_1.jpg')} alt="Image" className="img-fluid mb-5 mb-lg-0 rounded shadow" />
            </div>
            <div className="col-lg-5 ml-auto pl-lg-5">
              <h2 className="text-black mb-4">Create interactive prototypes</h2>
              <p className="mb-4">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
              <p><a href="#" className="btn btn-primary">Learn More</a></p>
            </div>
          </div>
          
        </div>
      </div>


      <div className="site-section testimonial-wrap" id="testimonials-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">Testimonials</h2>
            </div>
          </div>
        </div>
        <div className="slide-one-item home-slider owl-carousel">
            <div>
              <div className="testimonial">
                <figure className="mb-4 d-block align-items-center justify-content-center">
                  <div><img src={require('./images/person_3.jpg')} alt="Image" className="w-100 img-fluid mb-3 shadow" /></div>
                </figure>
                <blockquote className="mb-3">
                  <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                </blockquote>
                <p className="text-black"><strong>John Smith</strong></p>

                
              </div>
            </div>
            <div>
              <div className="testimonial">
                
                <figure className="mb-4 d-block align-items-center justify-content-center">
                  <div><img src={require('./images/person_2.jpg')} alt="Image" className="w-100 img-fluid mb-3 shadow" /></div>
                </figure>

                <blockquote className="mb-3">
                  <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                </blockquote>
                
                <p className="text-black"><strong>Robert Aguilar</strong></p>
    
              </div>
            </div>

            <div>
              <div className="testimonial">
                <figure className="mb-4 d-block align-items-center justify-content-center">
                  <div><img src={require('./images/person_4.jpg')} alt="Image" className="w-100 img-fluid mb-3 shadow" /></div>
                </figure>
                <blockquote className="mb-3">
                  <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                </blockquote>
                <p className="text-black"><strong>Roger Spears</strong></p>
      
              </div>
             
            </div>

            <div>
              <div className="testimonial">
                <figure className="mb-4 d-block align-items-center justify-content-center">
                  <div><img src={require('./images/person_1.jpg')} alt="Image" className="w-100 img-fluid mb-3 shadow" /></div>
                </figure>
                <blockquote className="mb-3">
                  <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                </blockquote>
                <p className="text-black"><strong>Kyle McDonald</strong></p>
     
              </div>

            </div>

          </div>
      </div>

      <div className="site-section" id="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">News Posts</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img src={require('./images/img_1.jpg')} alt="Image" className="img-fluid" />
                <h2><a href="#">Celebrate 17 August with our village</a></h2>
                <div className="meta mb-4">Sunday <span className="mx-2">7 am</span> August 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>The activity starts with a healthy walk and then continues with cooking together </p>
                <p><a href="#">Continue Reading...</a></p>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img src={require('./images/img_2.jpg')} alt="Image" className="img-fluid" />
                <h2><a href="#">Celebrate 17 August with our village</a></h2>
                <div className="meta mb-4">Sunday <span className="mx-2">7 am</span> August 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>The activity starts with a healthy walk and then continues with cooking together</p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img src={require('./images/img_3.jpg')} alt="Image" className="img-fluid" />
                <h2><a href="#">Celebrate 17 August with our village</a></h2>
                <div className="meta mb-4">Sunday <span className="mx-2">7 am</span> August 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>The activity starts with a healthy walk and then continues with cooking together</p>
                <p><a href="#">Continue Reading...</a></p>
              </div> 
            </div>
            
          </div>
        </div>
      </div>

      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">Complaint</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 mb-5">

              

              <form action="#" className="p-5 bg-white">
                
                <h2 className="h4 text-black mb-5">Send your complaint in here</h2> 

                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" for="fname">First Name</label>
                    <input type="text" id="fname" className="form-control rounded-0" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" for="lname">Last Name</label>
                    <input type="text" id="lname" className="form-control rounded-0" />
                  </div>
                </div>

                <div className="row form-group">
                  
                  <div className="col-md-12">
                    <label className="text-black" for="email">Email</label> 
                    <input type="email" id="email" className="form-control rounded-0" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" for="message">Message</label> 
                    <textarea name="message" id="message" cols="30" rows="7" className="form-control rounded-0" placeholder="Write your notes or questions here..."></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input type="submit" value="Send Message" className="btn btn-primary mr-2 mb-2" />
                  </div>
                </div>

              </form>
            </div>
          
          </div>
          
        </div>
      </div>

      <div className="footer py-5 border-top text-center">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <p className="mb-0">
                <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                <a href="#" className="p-3"><span className="icon-instagram"></span></a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p className="mb-0">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());
                </script> All rights reserved | This template is made with 
                <i className="icon-heart" aria-hidden="true" />
                 by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </HashRouter>
    );
  }
}
 
export default App;
