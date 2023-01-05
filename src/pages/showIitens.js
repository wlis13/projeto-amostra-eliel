import React from 'react';
import '../style/cards.css';

const ShowItens = (props) => {
  const categories = props.showValues;

  return (
    <div className="container-cards">
      { categories.map((iten) => (
        <div className="cards">
          <p>{ iten.title }</p>
          <img src={ iten.thumbnail } alt={ iten.title } />
          <h2>{ `R$${ iten.price }` }</h2>
          <button>Comprar</button>
        </div>
      )) }
    </div>
  );
};

export default ShowItens