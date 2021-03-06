import React, { memo } from 'react';
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
import figmaSkill from '../../assets/images/skills/figma.png';
import sketchSkill from '../../assets/images/skills/sketch.png';

function Skills() {
  return (
    <section className='skills'>
      <Title title='Skills' />
      <div className='container'>
        <Skill title='HTML' img={htmlSkill} />
        <Skill title='CSS' img={cssSkill} />
        <Skill title='Sass' img={sassSkill} />
        <Skill title='JavaScript' img={javascriptSkill} />
        <Skill title='TypeScript' img={typescriptSkill} />
        <Skill title='Node' img={nodeSkill} />
        <Skill title='React' img={reactSkill} />
        <Skill title='Redux' img={reduxSkill} />
        <Skill title='Firebase' img={firebaseSkill} />
        <Skill title='MongoDB' img={mongodbSkill} />
        <Skill title='Git' img={gitSkill} />
        <Skill title='JSON' img={jsonSkill} />
        <Skill title='Figma' img={figmaSkill} />
        <Skill title='Sketch' img={sketchSkill} />
      </div>
    </section>
  );
}

export default memo(Skills);
