import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import GoldCalculator from './Components/GoldCalculator/GoldCalculator'
import Footer from './Components/Footer/Footer';
import GoldAd from './Components/GoldAd/GoldAd';

const App = () => {
  return (
    <div>
     <Navbar/>
     <GoldAd/>
     <GoldCalculator/>
     <Footer/>
    </div>
  )
}

export default App

