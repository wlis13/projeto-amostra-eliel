import React, { useContext } from 'react';
import '../style/cards.css';
import MyContext from '../context/MyContext';

const ShowItens = () => {

  const { getProducts, showProducts } = useContext(MyContext);

  return (
    <div>
      <div className="container-cards">
        { showProducts && showProducts.map((iten, index) => (
          <div className="cards" key={ index }>
            <p>{ iten.title }</p>
            <img src={ iten.thumbnail } alt={ iten.title } />
            <h2>{ `R$${ iten.price }` }</h2>
            <button onClick={ () => { getProducts(iten) } }>Comprar</button>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default ShowItens;