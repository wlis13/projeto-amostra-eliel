import React, { useContext } from 'react';
import '../style/cards.css';
import MyContext from '../context/MyContext';
import Categories from './Categories';

const ShowItens = (props) => {
  const showProducts = props.showValues;

  const { getProducts } = useContext(MyContext);

  return (
    <div>
      <Categories />
      <div className="container-cards">
        { showProducts.map((iten, index) => (
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