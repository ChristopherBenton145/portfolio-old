import React from 'react';
import './About.css';
import Title from '../../components/Title/Title';

function About() {
  return (
    <section className='about' id='about'>
      <Title title='About' />
      <p>Hello, I’m a web developer proficient in everything front end, From crafting beautiful components in React to creating, reading, updating, and deleting data from servers.</p>
      <p>I am always in search of more work so feel free to contact me.</p>
    </section>
  );
}

export default About;
