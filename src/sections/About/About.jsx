import React, { memo } from 'react';
import './About.css';
import Title from '../../components/Title/Title';
import StickyNote from '../../components/StickyNote/StickyNote';

function About() {
  return (
    <section className='about'>
      <Title title='About' />
      <p>Hello, I’m a web developer proficient in everything front end, From crafting beautiful components in React to creating, reading, updating, and deleting data from servers.</p>
      <p>I am always in search of more work so feel free to contact me.</p>
      <div className='container'>
        <StickyNote title='Favorite JS Framework' content='React.' color='#ffc' rotation='-6deg' />
        <StickyNote title='Design Experience' content='I have some experience designing both UI and UX for websites.' color='#ccf' rotation='0deg' />
        <StickyNote title='Fun Fact About Me' content={`I'm currently learning Japanese in my spare time.`} color='#cfc' rotation='6deg' />
      </div>
    </section>
  );
}

export default memo(About);
