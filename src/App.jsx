import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from "./Components/Title/Title"
import About from './Components/About/About'
import Gallery from "./Components/Gallery/Gallery"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle = "Our Program" title="What we offer"/>
        <Program/>
        <About/>
        <Title subtitle = "Gallery" title="Campus Photos"/>
        <Gallery/>
        <Title subtitle = "Testimonials" title="What Student Says"/>
        <Testimonials/>
        <Title subtitle = "Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
