import React, { memo } from 'react';
import './Projects.css';
import Title from '../../components/Title/Title';
import Project from '../../components/Project/Project';

function Projects() {
  return (
    <section className='projects'>
      <Title title='Projects' />
      <div className='container'>
        <Project title='Portfolio' description='This is my portfolio' live='https://christophers-portfolio42.netlify.app' code='https://github.com/ChristopherBenton145/portfolio' />
        <Project title='Premium Landing Page' description='A typical landing page for a company built with Next' live='https://premium-landing-page.netlify.app' code='https://github.com/ChristopherBenton145/premium-landing-page' />
        <Project title='Restaurant Page' description='This is a great looking, professionally build and designed website using Figma and React.' live='https://restaurant-page42.netlify.app' code='https://github.com/ChristopherBenton145/restaurant-page' />
        <Project title='Multistep Form' description='Just a form, but with multiple steps and cool animations' live='https://multistep-form42.netlify.app' code='https://github.com/ChristopherBenton145/multistep-form' />
      </div>
    </section>
  );
}

export default memo(Projects);
