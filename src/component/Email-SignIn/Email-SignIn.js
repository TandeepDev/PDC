import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Email-SignIn.css';
function EmailSignIn() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const emailSignIn = async (e) => {
    e.preventDefault();
    await postData('http://35.165.105.151:3000/auth/emailLogin', {
      email: email,
      password: password,
    })
      .then((data) => {
        console.log(data); // JSON data parsed by
        localStorage.setItem('isloggedin', 'yes');
        closeModal();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
          <div className='modal-body mx-1'>
            <div className='md-form mb-3'>
              <i className='fas fa-envelope prefix grey-text'></i>
              <input
                type='text'
                id='defaultForm'
                value={email}
                readOnly
                // onChange={(e) => setValue(e.target.value)}
                className='form-control validate'
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='defaultForm'
              ></label>
            </div>
            <div className='md-form mb-1'>
              <i className='fas fa-lock prefix grey-text'></i>
              <input
                type='password'
                id='defaultForm-pass'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Your Password'
                className='form-control validate'
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='defaultForm-pass'
              >
                {/* Your password */}
              </label>
            </div>
          </div>
          <div className='modal-footer d-flex justify-content-center'>
            <button
              id='email-signIn'
              onClick={emailSignIn}
              className='btn btn-default'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSignIn;
