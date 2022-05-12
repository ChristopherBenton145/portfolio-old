import React, { memo } from 'react';
import './StickyNote.css';

function StickyNote({ title, content, color, rotation }) {
  return (
      <>
        <div className='sticky-note' style={{'--color': color, '--rotation': rotation}}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </>
  );
}

export default memo(StickyNote);
