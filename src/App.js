import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';

function App() {
  var user = localStorage.getItem('userId');
  var email = localStorage.getItem('email');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          // exact
          path='/'
          element={user !== null || email !== null ? <Dashboard /> : <Home />}
        />
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
