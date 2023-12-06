import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Pincode from './Pages/Pincode';
import Dashboard from './Pages/Dashboard/Dashboard';
import RegistrationAndListing from './Pages/RegistrationAndListing';
import Register from './Pages/Register';
import Login from './Pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import UnAuth from './Pages/UnAuth';
import NotFound from './Pages/NotFound';
import { useContext, useEffect, useState } from 'react';
import { userApiHandleContext } from './Context/ContextShare';

function App() {
  const {isLoggedIn} = useContext(userApiHandleContext)
  const [token, setToken] = useState("")
  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
  }, [isLoggedIn])
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/setup' element={<Pincode />} />
        <Route path='/dashboard' element={token ? <Dashboard /> : <UnAuth />} />
        <Route path='/registration-and-listing' element={<RegistrationAndListing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
