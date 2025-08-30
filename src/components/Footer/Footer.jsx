import React from 'react'

const Footer = () => {

   return (
      <div>
         <footer className="bg-black text-white py-4" style={{marginTop: '2rem', backgroundColor: '#212529'}}>
            <div className="container-fluid mx-auto text-center">
               <div className='row mb-2'>
                  <div className="col">
                     <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#198754'}}>AgroHub</h2>
                     <p className='text-break' style={{color: 'white'}}>Connecting Nigerian Farmers directly to customers, ensuring fresh produce, fair prices, and sustainability across various communities with Technology</p>
                     <h6 style={{textTransform: 'uppercase'}}>Connect with us</h6>
                     <ul className='list-unstyled d-flex flex-row align-items-center gap-3' style={{justifyContent: 'center'}}>
                        <li className='list-inline-item'><i className="bi bi-facebook"></i></li>
                        <li className='list-inline-item'><i className="bi bi-whatsapp"></i></li>
                        <li className='list-inline-item'><i className="bi bi-twitter-x"></i></li>
                        <li className='list-inline-item'><i className="bi bi-youtube"></i></li>
                        <li className='list-inline-item'><i className="bi bi-linkedin"></i></li>
                     </ul>
                  </div>
                  <div className="col">
                     <h2 style={{textTransform: 'capitalize', color: '#198754', display: 'flex', alignItems: 'start'}}>quick links</h2>
                     <ul className='list-unstyled'>
                        <li><a href="#" className='text-white text-decoration-none'>Home</a></li>
                        <li><a href="#" className='text-white text-decoration-none'>About Us</a></li>
                        <li><a href="#" className='text-white text-decoration-none'>Products</a></li>
                        <li><a href="#" className='text-white text-decoration-none'>Be an Agent</a></li>
                        <li><a href="#" className='text-white text-decoration-none'>Contact Us</a></li>
                     </ul>
                  </div>
                  <div className="col">
                     <h2 style={{textTransform: 'capitalize', color: '#198754', display: 'flex', alignItems: 'start'}}>Resources</h2>
                     <ul className='list-unstyled'>
                        <li><a href="#" className='text-white text-decoration-none'>Blog</a></li>
                        <li><a href="#" className='text-white text-decoration-none'>FAQ</a></li>
                        <li><a href="#" className='text-white text-decoration-none'>Privacy Policy</a></li>
                        <li><a href="#" className='text-white text-decoration-none'>Terms of Service</a></li>
                     </ul>
                  </div>
                  <div className="col">
                     <h2 style={{textTransform: 'capitalize', color: '#198754', alignItems: 'start', display: 'flex'}}>Get in touch</h2>
                     <ul className='list-unstyled d-flex flex-column align-items-start gap-3 mb-3'>
                        <li className='list-inline-item'><span><i className="bi bi-envelope" style={{color: '#198754', fontSize: '1.2rem', marginRight: '0.8rem'}}></i> </span> <a href="mailto:info@ladeilinnovations.com" className='text-white text-decoration-none' style={{fontSize: '1.2rem', color: '#737678'}}>info@ladeilinnovations.com</a></li>
                        <li className='list-inline-item'><span><i className="bi bi-telephone" style={{color: '#198754', fontSize: '1.2rem', marginRight: '0.2rem'}}></i> </span><a href="tel:+1234567890" className='text-white text-decoration-none' style={{fontSize: '1.2rem', color: '#737678'}}>+1234567890</a></li>
                        <li className='list-inline-item'><span><i className="bi bi-geo-alt" style={{color: '#198754', fontSize: '1.2rem', marginRight: '0.8rem'}}></i> </span> Address: <a href="#" className='text-white text-decoration-none' style={{fontSize: '1.2rem', color: '#737678'}}>123 Street, City, Country</a></li>
                     </ul>
                     <p style={{color: '#198754', fontWeight: 'bold', textTransform: 'capitalize', alignItems: 'start', display: 'flex'}}><span><i className="bi bi-envelope" style={{color: 'white', marginRight: '0.5rem'}}></i></span>
                        stay updated</p>
                        <p><small style={{color: 'white', display: 'flex'}}>Subscribe to our newsletter for the latest updates</small></p>
                     <form>
                        <div className="input-group">
                           <input type="email" className="form-control" placeholder="Enter your email address" aria-label="Email" style={{border: '1px solid #198754', borderRadius: '5px'}}/>
                           <button className="btn btn-outline-success" type="submit" style={{border: '1px solid #198754', borderRadius: '5px', backgroundColor: '#198754', color: 'white', marginLeft: '5px'}}>Subscribe</button>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="container">
                  <hr />
               <p>&copy; {new Date().getFullYear()} Ladeil Innovations. All rights reserved. Made with ❤️ for the community</p>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default Footer;
