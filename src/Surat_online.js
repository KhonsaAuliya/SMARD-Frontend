import React, { Component } from 'react';

class Surat_online extends Component{

render(){
  return(
    <div className="site-section bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Permohonan Surat</h2>
          </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 mb-5">

              <form action="#" className="p-5 bg-white">
                  
                <h2 className="h4 text-black mb-12">Silahkan Kirim Permohonan Surat Anda</h2> 

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" for="fname">Username</label>
                      <input type="text" id="name" className="form-control rounded-0" />
                    </div><br/>
                    <div className="col-md-12">
                      <label className="text-black" for="email">Email</label> 
                      <input type="email" id="email" className="form-control rounded-0" />
                    </div><br/>
                    <div className="col-md-12">
                      <label className="text-black" for="nik">NIK</label> 
                      <input type="token" id="token" className="form-control rounded-0" />
                    </div>
                    <div className="col-md-12">
                      <label className="text-black" for="message">Message</label> 
                      <textarea name="message" id="message" cols="30" rows="7" className="form-control rounded-0" placeholder="Write your message..."></textarea>
                    </div>
                    <div className="col-md-12">
                      <label className="text-black">Jenis Surat</label>
                      <select className="form-control rounded-0">
                        <option value="surat keterangan domisili">Surat Keterangan Domisili</option>
                        <option value="sktm">SKTM</option>
                        <option value="surat pindah">Surat Pindah</option>
                        <option value="surat pemilu">Surat Pemilu</option>
                      </select>
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

export default Surat_online;