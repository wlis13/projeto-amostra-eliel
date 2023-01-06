import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../style/cards.css'

const CardsPage = (props) => {
  const valueSearch = props.searchValue
  const { getProduct } = useContext(MyContext);

  return (

    <div className="container-cards">
      { valueSearch && valueSearch.map((iten) => (
        <div className="cards" key={ iten.title }>
          <p>{ iten.title }</p>
          <img src={ iten.thumbnail } alt={ iten.title } />
          <h2>{ `R$${ iten.price }` }</h2>
          <button onClick={ () => { getProduct(iten) } }>Comprar</button>
        </div>
      )) }
    </div>

  );
};

export default CardsPage