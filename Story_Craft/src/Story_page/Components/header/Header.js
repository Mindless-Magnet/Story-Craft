import React from 'react'

import { Link } from 'react-router-dom';

import './header.css';

const Header = ( {title}) => {

  return (
    <div className='story__header'  id='head'>
        <div className="story__header-Heading">
          <h1 className='gradient__text'>STORY CRAFT</h1>
        </div>
        <div className="story__header-Title">
          <h1>{title}</h1>
        </div>
        <div className="story__header-sign">
          <Link to="/#try">
          <button type='button'>New Story</button>
          </Link>
        </div>
        <div className="story__header-Title2">
          <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Header;