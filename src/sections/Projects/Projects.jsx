import React from 'react';
import './Projects.css';
import Title from '../../components/Title/Title';
import Project from '../../components/Project/Project';

function Projects() {
  return (
    <section className='projects' id='projects'>
      <Title title='Projects' />
      <div className='container'>
        <Project title='Premium Landing Page' live='https://premium-landing-page.netlify.app/' code='https://github.com/ChristopherBenton145/premium-landing-page' />
        <Project title='Restaurant Page' live='https://restaurant-page42.netlify.app' code='https://github.com/ChristopherBenton145/restaurant-page' />
        <Project title='Xupe Remastered' live='https://xupe-remastered.netlify.app/' code='https://github.com/ChristopherBenton145/xupe-remastered' />
        <Project title='Space Landing Page' live='https://space-landing-page42.netlify.app/' code='https://github.com/ChristopherBenton145/space-landing-page' />
        <Project title='Multistep Form' live='https://multistep-form42.netlify.app/' code='https://github.com/ChristopherBenton145/multistep-form' />
      </div>
    </section>
  );
}

export default Projects;
