import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
<div className='container footer_body'>
  <div className='row footer'>
    <div className='col-lg-7'><div className='quick_link'><h6>Quick Links</h6></div>
    
    <div className='footer_lists'>
      <ul>
        <li > <Link to="/">Press Room</Link></li>
        <li><Link to="/">Mobile App</Link></li>
        <li><Link to="/">Corporate</Link></li>
        <li><Link to="/">Sustainability</Link></li>
      </ul>
    </div>
  
    <div className='footer_lists'>
      <ul>
        <li> <Link to="/"> About Us</Link></li>
        <li><Link to="/">Franchising</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/">Site Map</Link></li>
      </ul>
    </div>

    </div>
  
    <div className='col-lg-5'><div className='ms-5'><h6>Follow Us</h6></div>
    
    <div className='icons ms-4'><Nav>
            <Nav.Link href="#deets"><i className='fa fa-facebook'/></Nav.Link>
            <Nav.Link href="#deets"><i className="fa fa-twitter"/></Nav.Link>
            <Nav.Link href="#deets"><i className="fa fa-flickr"/></Nav.Link>
            <Nav.Link href="#deets"><i className="fa fa-youtube"/></Nav.Link>
            
            <Nav.Link href="#deets"><i className="fa fa-google-plus"/></Nav.Link>
            
            <Nav.Link href="#deets"><i className="fa fa-instagram"/></Nav.Link>
            
          </Nav></div>
    </div>
  </div>

  <div className='footer2nd mt-3'>
  <div className='row '>
  <div className='text-center'><h3>OUR PARTNERS</h3></div>
  <hr/>
  <div className='flex JrBr'>
  <div className='my-3 me-5'><img src={require('../src/img/Jet_new.png')} alt='img'/></div>
   
   <div className='my-3'><img src={require('../src/img/BR_New.png')} alt='img'/></div>
 </div>
  </div>
    
</div>

<div className='last'>

  <ul>
    <li> <Link to="/">Terms of Use</Link></li>
    <li ><Link to="/">Privacy Policy</Link></li>
    <li ><Link to="/">Do Not Sell My Personal Info</Link></li>
    <li ><Link to="/">CA & VA Privacy</Link></li>
    <li ><Link to="/">Your Ad Choices</Link></li>
    <li><Link to="/">CA Transparency in Supply Chains Act</Link></li>
    <li ><Link to="/">Web Accessibility</Link></li>
  </ul>
</div>
<div className='py-3 text-center'>©2022 DD IP Holder LLC</div>
</div>

    </>
  )
}

export default Footer