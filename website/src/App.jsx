import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Projects from './pages/Projects'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Services from './pages/Services'

const App = () => {

  return (
    <>
      <Navbar />
      <About />
      <Services/>
      <Certificates />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </>
  )
}

export default App
