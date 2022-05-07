import React from 'react';
import './NavList.css';
import { activateMobileMenu } from '../MobileMenu/MobileMenu';

function NavList({ className }) {
  return (
    <ul className={className}>
      <li onClick={activateMobileMenu}><a href='#home'>Home</a></li>
      <li onClick={activateMobileMenu}><a href='#about'>About</a></li>
      <li onClick={activateMobileMenu}><a href='#skills'>Skills</a></li>
      <li onClick={activateMobileMenu}><a href='#projects'>Projects</a></li>
      <li onClick={activateMobileMenu}><a href='#contact'>Contact</a></li>
    </ul>
  );
}

export default NavList;
