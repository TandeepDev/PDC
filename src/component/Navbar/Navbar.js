import React from 'react';
import './Navbar.css';
import $ from 'jquery';
import Login from '../Login/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState('');
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIns = localStorage.getItem('isloggedin');
    setLoggedIn(loggedIns);
  }, [click, loggedIn]);
  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
    setClick(true);
    window.location.reload();
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
          500,
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
      <div className='Navbar'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#home'>
            <img src='/images/logo.png' alt='' />
          </a>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#about-us'>
                  About us
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#services'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Services
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='#service1'>
                    Service 1
                  </a>
                  <a className='dropdown-item' href='#service2'>
                    Service 2
                  </a>
                  <a className='dropdown-item' href='#service3'>
                    Service 3
                  </a>
                </div>
              </li>

              <li className='nav-item active'>
                <a className='nav-link' href='#career'>
                  Career
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact-us'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className='buttons'>
            {loggedIn !== '' ? (
              <button className='btn' href='#logout' onClick={logOut}>
                Logout
              </button>
            ) : (
              <button
                className='btn'
                data-toggle='modal'
                data-target='#modalLoginForm'
                data-backdrop='static'
                data-keyboard='false'
                href='#signin'
              >
                LOGIN / SIGNUP
              </button>
            )}
          </div>

          <button className='navbar-toggler' type='button'>
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </div>
      <Login />
    </>
  );
}

export default Navbar;
