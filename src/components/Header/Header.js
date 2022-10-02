import React from 'react'
import './Header.css'
import image1 from './../../assets/technology 1.png' 

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-1'>
          <h5>SUMMER 2020</h5>
          <h1 id='headline'>NEW COLLECTION</h1>
          <h4>We know how large objects will act.
            but things on small scale.
          </h4>
          <button>SHOP NOW</button>
        </div>
        <div className='col-2'>
          <div className='hero-cover-1'>
            <div className='none'>
              <svg className='eclipse-1' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.50547" cy="7.76734" r="7.62901" fill="#977DF4" />
              </svg>
              <svg className='eclipse-2' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#977DF4" />
              </svg>
              <svg className='eclipse-3' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16.3333" cy="16.3747" r="15.6213" fill="white" />
              </svg>
              <svg className='eclipse-4' width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.1345" cy="40.3132" r="39.9615" fill="white" />
              </svg>
              <svg className='eclipse-5' width="501" height="488" viewBox="0 0 501 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="250.42" cy="237.941" r="249.941" fill="white" />
              </svg>
              <img src={image1} alt='logo' /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
