import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailSignUp.css';
function EmailSignUp() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  useEffect(() => {
    const emails = localStorage.getItem('email');
    setEmail(emails);
  }, [click]);

  const closeModal = (e) => {
    e.preventDefault();
    setClick(true);
    document.querySelector('.Emailmodal').classList.add('hideEmailModal');
    navigate('/');
    window.location.reload();
  };
  const emailsignUp = async (e) => {
    e.preventDefault();
    if (password !== cnfPassword) {
      return alert('Please enter a Same Password !');
    } else {
      const formData = new FormData();
      formData.append('', 'abc123');
      formData.append('name', fullName);
      formData.append('email', email);
      // formData.append('username', 'abc123');
      formData.append('password', password);
      formData.append('phoneNumber', phoneNumber);
      console.log(formData);
      await postData('http://35.165.105.151:3000/auth/registerViaEmail', {
        name: fullName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      })
        .then((data) => {
          console.log(data.data); // JSON data parsed by
          localStorage.setItem('isloggedin', 'yes');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className='Emailmodal' id='EmailmodalLoginForm'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header text-center'>
            <h5 className='modal-title w-100 font-weight-bold'>
              Login / SignUp
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={closeModal}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body mx-2'>
            <div className='md-form mb-3'>
              <span className='font-weight-bold emailsignUpspan'>
                Full Name :
              </span>
              <input
                type='text'
                id='fullName'
                onChange={(e) => setFullName(e.target.value)}
                className='form-control validate'
                placeholder='Enter Your Name'
                required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='fullName'
              ></label>
            </div>
            <div className='md-form mb-3'>
              <span className='font-weight-bold emailsignUpspan'>Email :</span>
              <input
                type='text'
                id='email'
                value={email}
                readOnly
                // onChange={(e) => setValue(e.target.value)}
                className='form-control validate'
                // required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='email'
              ></label>
            </div>
            <div className='md-form mb-3'>
              <span className='font-weight-bold emailsignUpspan'>
                Username :
              </span>
              <input
                type='text'
                id='username'
                onChange={(e) => setUsername(e.target.value)}
                className='form-control validate'
                placeholder='Enter Username'
                required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='username'
              ></label>
            </div>
            <div className='md-form mb-3'>
              <span className='font-weight-bold emailsignUpspan'>
                Phone No. :
              </span>
              <input
                type='text'
                id='phoneNumber'
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter Your Phone No.'
                className='form-control validate'
                required
              />
              <label data-error='wrong' data-success='right' htmlFor='password'>
                {/* Your password */}
              </label>
            </div>
            <div className='md-form mb-3'>
              <span className='font-weight-bold emailsignUpspan'>
                Password :
              </span>
              <input
                type='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Your Password'
                className='form-control validate'
                required
              />
              <label data-error='wrong' data-success='right' htmlFor='password'>
                {/* Your password */}
              </label>
            </div>
            <div className='md-form mb-3'>
              <span className='font-weight-bold emailsignUpspan'>
                Confirm Password :
              </span>
              <input
                type='password'
                id='confirm-password'
                placeholder='Enter Your Again Password'
                onChange={(e) => setCnfPassword(e.target.value)}
                className='form-control validate'
                required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='confirm-password'
              >
                {/* Your password */}
              </label>
            </div>
          </div>
          <div className='modal-footer d-flex justify-content-center'>
            <button
              id='emailsignBtn'
              onClick={emailsignUp}
              className='btn btn-default'
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSignUp;
