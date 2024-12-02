import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import About from './pages/AboutUs'
function App() {
  return (
    <div>
       <Navbar></Navbar>
       {/* <Card></Card> */}
       <About></About>
       <Footer></Footer>
    </div>
  )
}

export default App