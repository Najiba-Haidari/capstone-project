import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Signup from './components/pages/Signup.jsx'
import Login from './components/pages/Login.jsx'
import Nav from './components/Nav.jsx'

function App() {
const [isLoggedIn, setIsLoggedIn]= useState(false)

const logout = () => {
  // Clear client-side token or any other logout logic
  setIsLoggedIn(false);
};

  return (
    <div>
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
