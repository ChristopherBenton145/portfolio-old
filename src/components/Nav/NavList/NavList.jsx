import React from 'react';
import './NavList.css';
import { gotoSection } from '../Nav';

function NavList({ className }) {
  return (
    <ul className={className}>
      <div className='ribbon1' />
      <li className='active' onClick={() => gotoSection(document.querySelector('.header'))}>Home</li>
      <li onClick={() => gotoSection(document.querySelector('.about'))}>About</li>
      <li onClick={() => gotoSection(document.querySelector('.skills'))}>Skills</li>
      <li onClick={() => gotoSection(document.querySelector('.projects'))}>Projects</li>
      <li onClick={() => gotoSection(document.querySelector('.contact'))}>Contact</li>
      <span className='ribbon2' />
    </ul>
  );
}

export default NavList;
