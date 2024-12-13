import React from 'react'
import About from './About/About'
import Sell from './Sell/Sell'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bye from './Buy/Buy'
import Home from './Home/Home'
function App() {

  return (

      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
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