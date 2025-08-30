import { useState } from 'react'
import AppLogo from '/naijahoodlogo.png'
import './App.css'
import PageTitle from './components/PageTitle'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
      <Navbar />
       <PageTitle defaultTitle="Ladeil Innovations" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App;