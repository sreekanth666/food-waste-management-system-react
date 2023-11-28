import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Pincode from './Pages/Pincode';
import Dashboard from './Pages/Dashboard/Dashboard';
import RegistrationAndListing from './Pages/RegistrationAndListing';
import Register from './Pages/Register';
import Login from './Pages/Login';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setup' element={<Pincode />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/registration-and-listing' element={<RegistrationAndListing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
