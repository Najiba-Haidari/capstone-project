import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home.jsx'
import Signup from './components/pages/Signup/Signup.jsx'
import Login from './components/pages/Login/Login.jsx'
import Nav from './components/Nav.jsx'
import Search from './components/pages/Search/Search.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [isLoggedIn, setIsLoggedIn]= useState(false)

const logout = () => {
  // Clear client-side token or any other logout logic
  setIsLoggedIn(false);
};

  return (
    <div className='image'>
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
