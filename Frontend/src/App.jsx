import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import About from './pages/AboutUs'
import Sell from './Sell/Sell'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bye from './Buy/Buy'
function App() {

  return (

      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/sell" element={<Sell/>}/>
        <Route path="/buy" element={<Bye/>}/>
        <Route path="/aboutus" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App