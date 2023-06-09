import React, { useState } from 'react';

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from './pages/Contact'

import "./App.css";
import { Link, animateScroll} from "react-scroll";
import scroll from "./scroll.png"

export default function App() {
  return (
    <div className="App">
      <header className='navbar'>
        <nav className="nav__container__actions">
          <ul>
          <li>
              <Link activeClass="active" smooth spy to="home">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="menu">
                Menu
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='bg'></div>
      <div className='cont'>
      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id="menu"><Menu/></section>
      <section id="contact"><Contact/></section>
      </div>
      <ScrollToTopButton/>
    </div>
  );
}

function ScrollToTopButton() {
    return (  
      <div style={{  position: 'fixed', bottom: '20px', right: '20px'}}onClick={() => animateScroll.scrollToTop()}>
        <img src={scroll} style={{width:'150px'}}/>
      </div>
    );
  }