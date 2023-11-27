import React from 'react'
import './header.css'

import arrow from '../../assets/outline_arrow_small_right.png'
import img1 from '../../assets/img1.png'

const Header = () => {
  return (
    <div className='landing__header section__padding' id='about'>
      <div className="landing__header-content">
        <h1><span className='gradient__text'>Embark</span> on an Epic Adventure in the <span className='gradient__text'>World of Imagination</span></h1>
        <p>Embark on a Journey of Learning and Growth, where every moment is a chance to explore new ideas and understand the world around us.</p>
        <div className="landing__header-content_button">
          <button type='button'><a href="#try">BUILD YOUR WORLD</a></button>
          <a href="#try"><img src={arrow} alt="arrow" /></a>
        </div>
      </div>
      <div className="landing__header-image">
        <img src={img1} alt="headerimg" />
      </div>
    </div>
  )
}

export default Header