import React from 'react';
import './Aboutus.css';
function Aboutus() {
  return (
    <>
      <div className='Aboutus'>
        <div className='Aboutus-background-container'>
          <div className='bg-1'></div>
          <div className='bg-2'></div>
        </div>
        <div className='about-container'>
          <div className='image-container'>
            <img src='./images/banner.jpeg' alt='' />
          </div>

          <div className='Aboutus-text-container'>
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              porro rerum cupiditate expedita jbha svd gha scsdh gasc dasf dh
              ghsvahsgd <br /> distinctio nisi nulla ipsum libero molestiae
              minima Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid,ipsum libero{' '}
            </p>
            <a href='#'>Read More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
