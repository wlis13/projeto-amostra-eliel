import React from 'react';
import '../style/imagensCarousel.css';

function Image(props) {
  return <img className="imagens" src={ props.src } alt={ props.alt } />;
}

export default Image;
