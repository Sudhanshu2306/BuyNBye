import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import About from './pages/AboutUs'
import Sell from './Sell/Sell'
function App() {
  return (
    <div>
       <Navbar></Navbar>
       {/* <Card></Card> */}
       {/* <About></About> */}
       <Sell></Sell>
       <Footer></Footer>
    </div>
  )
}

export default App