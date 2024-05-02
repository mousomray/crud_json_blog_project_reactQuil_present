import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Writeblog from './Components/Writeblog'
import Details from './Components/Details'
import About from './Components/About'
import Login from './Components/Login'
import Register from './Components/Register'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/writeblog' element={<Writeblog />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
