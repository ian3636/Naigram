import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sidebar from './pages/Sidebar';





const App = () => {


  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/sidebar' element={<Sidebar />} />
    </Routes>
   </Router>   
  )
}

export default App