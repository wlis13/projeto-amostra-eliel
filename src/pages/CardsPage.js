import React from 'react';
import '../style/cards.css'

const CardsPage = (props) => {
  const valueSearch = props.searchValue

  return (
    <div className="container-cards">
      { valueSearch && valueSearch.map((iten) => (
        <div className="cards" key={ iten.title }>
          <p>{ iten.title }</p>
          <img src={ iten.thumbnail } alt={ iten.title } />
          <h2>{ `R$${ iten.price }` }</h2>
          <button>Comprar</button>
        </div>
      )) }
    </div>
  );
};

export default CardsPage