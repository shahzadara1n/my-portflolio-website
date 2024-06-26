import React from 'react'
import "./HeroImgStyles.css"
import IntroImage from "../Assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImage} alt='IntroImg'></img>
      </div>
      <div className='content'>
        <p>Hi! I'm a freelancer</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className='btn'>Projects</Link>
          <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;
