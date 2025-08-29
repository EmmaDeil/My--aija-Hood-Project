import React from 'react'

const Footer = () => {

   return (
      <div>
         <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
               <div className='row mb-2'>
                  <div className="col">
                     <h2>AgroHub</h2>
                     <p>Connecting Nigerian Farmers directly to customers, ensuring fresh produce, fair prices, and sustainability across various communities with Technology</p>
                     <h6 style={{textTransform: 'uppercase'}}>Connect with us</h6>
                     <ul className='list-inline d-flex justify-content-center gap-3'>
                        <li className='list-inline-item'>facebook</li>
                        <li className='list-inline-item'>twitter</li>
                        <li className='list-inline-item'>instagram</li>
                        <li className='list-inline-item'>linkedin</li>
                        <li className='list-inline-item'>youtube</li>
                     </ul>
                  </div>
                  <div className="col">

                  </div>
                  <div className="col">

                  </div>
                  <div className="col">

                  </div>
               </div>
               <p>&copy; {new Date().getFullYear()} Ladeil Innovations. All rights reserved. Made with ❤️ for the community</p>
            </div>
         </footer>
      </div>
   )
}

export default Footer;
