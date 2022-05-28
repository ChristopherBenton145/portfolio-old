import React, { useEffect, memo } from 'react';
import './Loader.css';

function Loader({ duration, delay }) {
  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('static');

    setTimeout(() => html.classList.remove('static'), Number(delay));
  });

  return <div className='loader' style={{ '--duration': `${duration}ms`, '--delay': `${delay}ms` }}></div>;
}

export default memo(Loader);
