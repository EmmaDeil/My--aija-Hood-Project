import React from 'react'

const LandingPage = () => {
  return (
    <div>


      <div className='container-fluid' style={{ padding: '2rem', backgroundColor: '#198754', marginBottom: '-2rem' }}>
        <div className='container' style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
          <h1>ready to transform agricultural products and orders?</h1>
          <p>Join thousands of farmers and customers who are already part of our growing community</p>
          <div className='button-group' style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button style={{ backgroundColor: 'white', color: '#198754', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>Get Started</button>
            <button style={{ backgroundColor: 'white', color: '#198754', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>Learn More</button>
            <button style={{ backgroundColor: 'white', color: '#198754', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>Become a Partner</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
