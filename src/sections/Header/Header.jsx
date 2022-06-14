import React, { memo } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import { gotoSection } from '../../components/Nav/Nav';

function Header() {
  return (
    <header className='header'>
      <Nav />
      <div className='container'>
        <h1>Hi, I'm Christopher</h1>
        <h2>A passionate developer who builds things for the web</h2>
        <button onClick={() => gotoSection(document.querySelector('.about'), -100)}>Learn more</button>
      </div>
    </header>
  );
}

export default memo(Header);
