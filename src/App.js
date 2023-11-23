import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Pincode from './Pages/Pincode';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setup' element={<Pincode />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
