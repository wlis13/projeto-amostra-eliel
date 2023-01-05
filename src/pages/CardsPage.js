import React from 'react';
import '../style/cards.css'

const CardsPage = (props) => {
  const valueSearch = props.searchValue

  return (
    <div className="container-cards">
      { valueSearch && valueSearch.map((iten) => (
        <div className="cards">
          <p>{ iten.title }</p>
          <img src={ iten.thumbnail } alt={ iten.title } />
          <h2>{ `R$${ iten.price }` }</h2>
        </div>
      )) }
    </div>
  );
};

export default CardsPage