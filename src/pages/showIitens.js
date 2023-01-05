import React, { useContext } from 'react';
import '../style/cards.css';
import MyContext from '../context/MyContext';

const ShowItens = (props) => {
  const categories = props.showValues;

  const { getProduct } = useContext(MyContext);

  return (
    <div className="container-cards">
      { categories.map((iten) => (
        <div className="cards">
          <p>{ iten.title }</p>
          <img src={ iten.thumbnail } alt={ iten.title } />
          <h2>{ `R$${ iten.price }` }</h2>
          <button onClick={ () => { getProduct(iten) } }>Comprar</button>
        </div>
      )) }
    </div>
  );
};

export default ShowItens