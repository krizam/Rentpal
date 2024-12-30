import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Profile from './Pages/Profile'
import Header from './Component/Header'
import About from './Pages/About'
import Rooms from './Pages/Rooms'
import Bookings from './Pages/Bookings'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/bookings" element={<Bookings/>} />
      <Route path="/admin/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App