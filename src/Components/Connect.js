import React from "react";

import logoAkla from '../logoweb.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn , faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import intouch from '../intouch.png'

const Connect = () => {

    return (
    <>
   <div className="getintouch col-12 col-sm-12 col-lg-12">
    <div className="row ">
        <div className="connect-section col-md-6" id="connect">
           <img className="intouch col-md-6 col-sm-12 col-lg-6" src={intouch} ></img>
        </div>

        <div className="col-md-6 col-sm-12 col-lg-6 pb-5">
            <h1 className="titletouch">Get In Touch</h1>
            <form>
                <div className="firstline">
                <input className="inputs" type="text" placeholder="First Name"></input>
                <input className="inputs" type="text" placeholder="Last Name"></input>
                </div>

                <div className="secondline">
                <input className="inputs" type="email" placeholder="Email Address"></input>
                <input className="inputs" type="number" placeholder="Phone No."></input>
                </div>

                <input className="inputs message  mb-3" type="text" placeholder="Message"></input>
                 <br></br>
                <button className="sendbtn">Send</button>
            </form>
        </div>

        </div>

        <div className="email">
    <div className="row">
        <h3 className="col-md-6">See My Projects At Once<br /> & leave Here Your E-mail Address</h3>
        <div className="col-md-5" style={{ display: 'flex', justifyContent: 'center' }}>
            <input className="form-control inemail" type="email" placeholder="Email Address" />
            <button type="button" className="btn">Submit</button>
        </div>
    </div>
</div>



  </div>

  <div className="Footer">
    <div className="footer-content">
      <img src={logoAkla} className='App-logofooter' alt='logo'/>

      <div className="App-footer">
        <div className="social-media-icons">
          <div className='iconmediafooter'>
            <FontAwesomeIcon className='iconitself' icon={faLinkedinIn} />
          </div>
          <div className='iconmediafooter'>
            <FontAwesomeIcon className='iconitself' icon={faFacebookF} />
          </div>
          <div className='iconmediafooter'>
            <FontAwesomeIcon className='iconitself' icon={faInstagram} />
          </div>
          </div>

          <div className="copyright-container">
            <h6 className="copyright">--Copyrights 2016-- All Rights Reserved here By Ola Adel Haggag</h6>
          </div>
          
      </div>
      </div>
    </div>
   </>
    )
}

export default Connect;