import React from 'react';
import './Navbar.css';
import $ from 'jquery';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/uesrSlice';
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/');
    window.location.reload();
  };
  const backToTop = (e) => {
    e.preventDefault();
    document.querySelector('.collapse').classList.add('hideModal');
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  $(document).ready(function () {
    // Fix for "hamburger menu" not collapsing after a click on menu item
    $('navbar-nav')
      .find('li')
      .on('click', 'a', function () {
        $('.navbar-collapse.in').collapse('hide');
      });

    // Add smooth scrolling to all nav links
    $(".navbar-nav a,  a[href='#home']").on('click', function (event) {
      // Don't scroll if on a mobile phone, it's too awkward
      if (this.hash !== '' && $(window).width() > 480) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Scroll to hash tag in 700 ms
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          200,
          function () {
            // Add hash (#) to URL when done scrolling
            window.location.hash = hash;
          }
        );
      }
    });
  });
  return (
    <>
      {/* <div className='Navbar'> */}
      <nav className='navbar navbar-expand-lg fixed-top navbar-light bg-light'>
        <a className='navbar-brand' href='#home'>
          <img src='/images/logo.png' alt='' />
        </a>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle mobile-nav'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                SERVICES
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item mobile-nav' href='#services'>
                  VETERINARY
                </a>
                <a className='dropdown-item mobile-nav' href='#services'>
                  INSURANCE
                </a>
                <a className='dropdown-item mobile-nav' href='#services'>
                  SHOP
                </a>
              </div>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle mobile-nav'
                href='#career'
                data-toggle='dropdown'
              >
                CAREER
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item mobile-nav'>
                  WORKING IN PDC CENTERS
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link mobile-nav' href='#about-us'>
                ABOUT US
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mobile-nav' href='#locations'>
                LOCATIONS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mobile-nav' href='#contact-us'>
                CONTACT US
              </a>
            </li>
            <li className='nav-item right-btn'>
              {user !== null ? (
                <div className='buttons '>
                  <button
                    className='btn'
                    id='logoutBtn'
                    onClick={logOut}
                    href='#logout'
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className='buttons'>
                  <button
                    className='btn'
                    id='signInBtn'
                    data-toggle='modal'
                    data-target='#modalLoginForm'
                    data-backdrop='static'
                    data-keyboard='false'
                    href='#signin'
                    onClick={backToTop}
                  >
                    LOGIN / SIGNUP
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>

        <button
          className='navbar-toggler fixed-right'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </nav>
      {/* </div> */}
      <Login />
    </>
  );
}

export default Navbar;
