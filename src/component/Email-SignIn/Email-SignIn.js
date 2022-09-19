import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import postData from '../../features/heplers';
import { login } from '../../features/uesrSlice';
import './Email-SignIn.css';

function EmailSignIn({ Email }) {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState(Email.Email);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(Email);
  }, [click]);
  const closeModal = (e) => {
    // e.preventDefault();
    setClick(true);
    document.querySelector('.Emailmodal').classList.add('hideEmailModal');
    // navigate('/');
    // window.location.reload();
  };
  const emailSignIn = async (e) => {
    e.preventDefault();
    await postData('http://34.212.171.155:3000/auth/emailLogin', {
      email: Email.Email,
      password: password,
    })
      .then((data) => {
        dispatch(login({ data }));
        navigate('/');
      })
      .catch((error) => {
        return alert(error);
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
                id='EmailSignIn'
                value={Email}
                readOnly
                className='form-control validate'
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='EmailSignIn'
              ></label>
            </div>
            <div className='md-form mb-1'>
              <i className='fas fa-lock prefix grey-text'></i>
              <input
                type='password'
                id='EmailSignIn-pass'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Your Password'
                className='form-control validate'
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='EmailSignIn-pass'
              ></label>
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
