import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Contribution from './components/Contribution.jsx'
import CardWallet from './components/CardWallet.jsx'
import CardWallet2 from './components/CardWallet2.jsx'
import CardSlider from './components/CardSlider.jsx'

function App() {


  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Contribution />
      <CardWallet />
      <CardSlider />
      <CardWallet2 />
      <Footer />
    </div>
  )
}

export default App
