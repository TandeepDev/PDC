import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpPage.css';
function OtpPage() {
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [forth, setForth] = useState('');
  const [fifth, setFifth] = useState('');
  const [sixth, setSixth] = useState('');
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, [click]);
  const closeModal = (e) => {
    // e.preventDefault();
    setClick(true);
    document.querySelector('.OtpPage').classList.add('hiddenOtp');
    navigate('/');
    window.location.reload();
  };

  const handleOtpNo = (e) => {
    e.preventDefault();
    const newOtp = one + two + three + forth + fifth + sixth;
    console.log(newOtp);
    console.log(typeof newOtp);

    const Otp = localStorage.getItem('otp');
    console.log(Otp);
    console.log(typeof Otp);
    if (Otp === newOtp) {
      navigate('/');
      localStorage.setItem('isloggedin', 'yes');
      closeModal();
    } else {
      return alert('Please enter a valid Otp !');
    }
  };
  return (
    <div id='Otp-model' className='OtpPage'>
      <div className='Otp-content'>
        <div className='model-container'>
          <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 text-center'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={closeModal}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <form className='rounded bg-white shadow p-5'>
              <div className='logo'>
                <img src='/images/logo.png' className='img-fluid' alt='logo' />
              </div>
              <h3 className='text-dark fw-bolder fs-4 mb-2'>
                Otp Verification
              </h3>

              <div className='fw-normal text-muted mb-4'>
                Enter the verification code we sent to ******9123
              </div>

              <div className='otp_input text-start mb-2'>
                <label for='digit'>Type your 6 digit security code</label>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                  <input
                    type='text'
                    onChange={(e) => setOne(e.target.value)}
                    className='form-control'
                    placeholder=''
                  />
                  <input
                    type='text'
                    className='form-control'
                    onChange={(e) => setTwo(e.target.value)}
                    placeholder=''
                  />
                  <input
                    type='text'
                    onChange={(e) => setThree(e.target.value)}
                    className='form-control'
                    placeholder=''
                  />
                  <input
                    type='text'
                    onChange={(e) => setForth(e.target.value)}
                    className='form-control'
                    placeholder=''
                  />
                  <input
                    type='text'
                    onChange={(e) => setFifth(e.target.value)}
                    className='form-control'
                    placeholder=''
                  />
                  <input
                    type='text'
                    onChange={(e) => setSixth(e.target.value)}
                    className='form-control'
                    placeholder=''
                  />
                </div>
              </div>

              <button
                type='submit'
                onClick={handleOtpNo}
                className='btn btn-primary submit_btn my-4'
              >
                Submit
              </button>

              <div className='fw-normal text-muted mb-2'>
                Didn't get the code ?
                <a
                  className='text-primary fw-bold text-decoration-none'
                  href='#'
                >
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
