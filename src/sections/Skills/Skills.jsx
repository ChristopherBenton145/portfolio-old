import React from 'react';
import './Skills.css';
import Title from '../../components/Title/Title';
import Skill from '../../components/Skill/Skill';
import htmlSkill from '../../assets/images/skills/html.png';
import cssSkill from '../../assets/images/skills/css.png';
import sassSkill from '../../assets/images/skills/sass.png';
import javascriptSkill from '../../assets/images/skills/javascript.png';
import typescriptSkill from '../../assets/images/skills/typescript.png';
import gitSkill from '../../assets/images/skills/git.png';
import firebaseSkill from '../../assets/images/skills/firebase.png';
import jsonSkill from '../../assets/images/skills/json.png';
import mongodbSkill from '../../assets/images/skills/mongodb.png';
import nodeSkill from '../../assets/images/skills/node.png';
import reactSkill from '../../assets/images/skills/react.png';
import reduxSkill from '../../assets/images/skills/redux.png';

function Skills() {
  return (
    <section className='skills' id='skills'>
      <Title title='Skills' />
      <div className='container'>
        <Skill title='HTML' img={htmlSkill} />
        <Skill title='CSS' img={cssSkill} />
        <Skill title='JavaScript' img={javascriptSkill} />
        <Skill title='React' img={reactSkill} />
        <Skill title='Git' img={gitSkill} />
        <Skill title='Sass' img={sassSkill} />
        <Skill title='TypeScript' img={typescriptSkill} />
        <Skill title='Redux' img={reduxSkill} />
        <Skill title='Node' img={nodeSkill} />
        <Skill title='Firebase' img={firebaseSkill} />
        <Skill title='MongoDB' img={mongodbSkill} />
        <Skill title='JSON' img={jsonSkill} />
      </div>
    </section>
  );
}

export default Skills;
