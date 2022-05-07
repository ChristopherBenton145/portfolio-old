import React from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';

function Header() {
  return (
    <header className='header' id='home'>
      <Nav />
      <div className="container">
        <h1>Hi, I'm Christopher</h1>
        <h2>A passionate developer who builds things for the web</h2>
        <a href='mailto: c.benton.145@gmail.com'><button>Let's Talk</button></a>
      </div>
    </header>
  );
}

export default Header;
