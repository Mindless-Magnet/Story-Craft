import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='landing__navbar'>
      <div className="landing__navbar-links">
        <div className="landing__navbar-links_heading">
          <h1 className='gradient__text'>STORY CRAFT</h1>
        </div>
        <div className="landing__navbar-links_container">
          <p><a href="#about">About</a></p>
          <p><a href="#wsc">What is Story Craft</a></p>
          <p><a href="#tech">Technology</a></p>
          <p><a href="#try">Try it Out</a></p>
        </div>
      </div>
      <div className="landing__navbar-sign">
        <button type='button'>Sign in</button>
        <button type='button'>Sign up</button>
      </div>
      <div className="landing__navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="landing__navbar-menu_container scale-up-center">
          <div className="landing__navbar-menu_container-links">
            <p><a href="#about">About</a></p>
            <p><a href="#wsc">What is Story Craft</a></p>
            <p><a href="#tech">Technology</a></p>
            <p><a href="#try">Try it Out</a></p>
          </div>
          <div className="landing__navbar-menu_container-links-sign">
            <button type='button'>Sign in</button>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;