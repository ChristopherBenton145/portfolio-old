import React, { memo } from 'react';
import './NavList.css';
import { gotoSection } from '../Nav';

function NavList({ className }) {
  return (
    <ul className={className}>
      <div className='ribbon1' />
      <li className='active' onClick={() => gotoSection(document.querySelector('.header'))}>Home</li>
      <li onClick={() => gotoSection(document.querySelector('.about'), -100)}>About</li>
      <li onClick={() => gotoSection(document.querySelector('.skills'), -100)}>Skills</li>
      <li onClick={() => gotoSection(document.querySelector('.projects'), -100)}>Projects</li>
      <li onClick={() => gotoSection(document.querySelector('.contact'))}>Contact</li>
      <span className='ribbon2' />
    </ul>
  );
}

export default memo(NavList);
