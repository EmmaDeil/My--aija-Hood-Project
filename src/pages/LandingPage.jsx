import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <div className='container-fluid' style={{ padding: '2rem', backgroundColor: '#f8f9fa' }}>
        <div className='row'>
          <div className="col-8">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem'}}>
            <div className='col-6 col-sm-4'>
              <img src="/naijahoodlogo.png" alt="" width={100} className='object-fit-cover border rounded'/>
            </div>
            <div className='col-6 col-sm-4'>
              <img src="/naijahoodlogo.png" alt="" width={100} className='object-fit-cover border rounded'/>
            </div>
            <div>
<div class="w-100 d-none d-md-block"></div>

              <ul className='list-unstyled col-6 col-sm-4'>
                <li>call to order</li>
                <li><a href="https://wa.me/1234567890">Chat to order on Whatsapp</a></li>
                <li style={{fontWeight: 'bold', color: 'red'}}><a href="">Today's Best Deals</a></li>
              </ul>
            </div>
            <div className='col-6 col-sm-4'>
              <img src="/naijahoodlogo.png" alt="" width={100} className='object-fit-cover border rounded'/>
            </div>
          </div>
        </div>
      </div>


      <div className='container-fluid' style={{ padding: '2rem', backgroundColor: '#198754', marginBottom: '-2rem' }}>
        <div className='container' style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'uppercase' }}>ready to transform agricultural orders?</h1>
          <p style={{ display: 'inline-block', margin: '1rem 0', fontSize: '1.0rem' }}>Join thousands of farmers and customers who are already part of our growing community</p>
          <div className='button-group' style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button type='button' style={{ backgroundColor: 'white', color: '#198754', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }} onClick={() => {}}>Get Started</button>
            <button className='' type='button' style={{ backgroundColor: 'white', color: '#198754', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }} onClick={() => {}}>Learn More</button>
            <button style={{ backgroundColor: 'white', color: 'black', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }} onClick={() => {}}><span><i className="bi bi-people" style={{ color: '#212529', marginRight: '0.5rem' }}></i></span>Become a Partner</button>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default LandingPage;
