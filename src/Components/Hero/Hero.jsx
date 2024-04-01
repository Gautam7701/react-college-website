import React from 'react'
import darkarrow from "../../assets/dark-arrow.png"
import "./Hero.css"

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="content">
            <h1 className='heading'>We Ensure better education for a better world</h1>
            <div className='info'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</div>
        </div>
        <button className='btn-hero'>Explore more <img height="15rem"  src={darkarrow} alt="" /></button>
    </div>
    </>
  )
}

export default Hero
