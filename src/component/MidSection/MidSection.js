import React from 'react';
import './MidSection.css';
// import { data, Para } from './data';
import data from './data';
import Para from './data2';
function MidSection() {
  var index = 0;
  function handleClick(e) {
    e.preventDefault();
    var img = e.target.classList.value;
    // var box = document.querySelectorAll('.box-section');
    var photos = document.querySelectorAll('.images');
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].classList.contains('active-img')) {
        photos[i].classList.remove('active-img');
      }
    }
    console.log(img);
    const boxHeading = document.querySelector('.box-section-heading');
    const boxPara = document.querySelector('.box-section-para');

    if (img === 'first-img images') {
      photos[0].classList.add('active-img');
      boxHeading.textContent = Para[0].title;
      boxPara.innerHTML = Para[0].text;
    } else if (img === 'second-img images') {
      photos[1].classList.add('active-img');
      boxHeading.textContent = Para[1].title;
      boxPara.innerHTML = Para[1].text;
    } else if (img === 'third-img images') {
      boxHeading.textContent = Para[2].title;
      boxPara.innerHTML = Para[2].text;
      photos[2].classList.add('active-img');
    } else if (img === 'forth-img images') {
      boxHeading.textContent = Para[3].title;
      boxPara.innerHTML = Para[3].text;
      photos[3].classList.add('active-img');
    }
  }
  function handlePrev(e) {
    e.preventDefault();
    index--;
    if (index < 0) {
      index = 3;
    }
    const para = document.querySelector('.testimonial');
    const source = document.querySelector('.sourceWords');
    console.log(source);
    para.textContent = data[index].text;
    source.textContent = data[index].author;
  }
  function handleNext(e) {
    e.preventDefault();
    index++;
    if (index > 3) {
      index = 0;
    }
    const para = document.querySelector('.testimonial');
    const source = document.querySelector('.sourceWordsl');
    para.textContent = data[index].text;
    source.textContent = data[index].author;
  }
  return (
    <div className='Mid-Section'>
      <div className='upper-section'>
        <h1>IT’S A NEW DAY IN PET CARE</h1>
        <div className='box-images'>
          <img
            src='/images/1.png'
            onClick={handleClick}
            className='first-img active-img images'
            alt=''
          />
          <img
            src='/images/2.png'
            onClick={handleClick}
            className='second-img images'
            alt=''
          />

          <img
            src='/images/3.png'
            onClick={handleClick}
            className='third-img images'
            alt=''
          />
          <img
            src='/images/4.png'
            onClick={handleClick}
            className='forth-img images'
            alt=''
          />
        </div>
        <div className='box-section'>
          <h2 className='box-section-heading'>Veterinary Care</h2>
          <p className='box-section-para'>
            At NewDay Veterinary Care located at Pet Paradise, care & compassion
            guide everything we do. With 24 locations and more on the way,
            NewDay combines comprehensive wellness plans, bundled pet care
            services, cutting-edge technology, and experienced veterinary care
            teams – all in a resort-style environment.
          </p>
        </div>
      </div>
      <div className='mid-section'>
        <div className='left-mid'>
          <img src='./images/image1.jpeg' alt='' />
          <p>
            With the Furever Loyal Rewards Program, it pays to be a pet and a
            parent. Members earn “Paw Points” on every $1 spent. Use points to
            get discounts on care offerings and holiday bookings.
          </p>
          <a href='#'>SIGN UP TODAY</a>
        </div>
        <div className='divider-line'></div>
        <div className='right-mid'>
          <img src='./images/image2.png' alt='' />
          <p>
            Since day one, Pet Paradise has been committed to helping paws in
            need. Through Paradise with a Purpose partnerships, we’ve donated
            over $350,000 and 290,000 pounds of pet food to over 100 charities.
          </p>
          <a href='#'>LEARN MORE</a>
        </div>
      </div>
      <div className='parallex-box'>
        <div className='parallax'></div>
        <div className='parallax-line'>
          <h3>Pet Dash</h3>
          <p>A convenient new way to drop-off and pick-up your pet.</p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className='bottom-section'>
        <div className='section-slider'>
          <div className='slide-container'>
            <h3>What Pet Parents Say About Us</h3>
            <p className='testimonial'>
              We love Pet Paradise and my dog does too, she doesn't get scared
              when we drop her off. The employees are always friendly and I
              appreciate how they report on how my dog's day went. They even
              remember her by name.
            </p>
            <span className='sourceWords'>J Thompson </span>{' '}
          </div>
          <button className='btns prev-btn' onClick={handlePrev}>
            <i className='fas fa-chevron-left'></i>
          </button>

          <button className='btns next-btn' onClick={handleNext}>
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
        <div className='bottom-form'>
          <h3>Join Our Newsletter</h3>
          <p>Enter your email to receive new offers & updates!</p>
          <input type='text' />
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
