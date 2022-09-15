import React from 'react';
import EmailSignIn from '../../component/Email-SignIn/Email-SignIn';
import EmailSignUp from '../../component/EmailSignUp/EmailSignUp';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import './Dashboard.css';
function Dashboard() {
  return (
    <>
      <Navbar />
      <h1>Dashboard</h1>
      <Footer />
    </>
  );
}

export default Dashboard;
