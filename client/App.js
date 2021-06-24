import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import LandingPage from './components/LandingPage'
import OrderConfirmation from './components/OrderConfirmation'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <OrderConfirmation  />
    </div>
  )
}

export default App
