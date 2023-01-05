import React from 'react';
import '../style/cards.css';

const ShowItens = () => {
  return (
    <div className="container-cards">
      {/* {.map((iten) => (
        <div className="cards">
          <p>{ iten.title }</p>
          <img src={ iten.thumbnail } alt={ iten.title } />
          <h2>{ `R$${ iten.price }` }</h2>
        </div>
      )) } */}
    </div>
  );
};

export default ShowItens