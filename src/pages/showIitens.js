import React, { useContext, useEffect } from 'react';
import '../style/cards.css';
import MyContext from '../context/MyContext';
import Categories from './Categories';

const ShowItens = (props) => {
  const showProducts = props.showValues;

  const { getProduct, fetchCategories } = useContext(MyContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div>
      <Categories />
      <div className="container-cards">
        { showProducts.map((iten) => (
          <div className="cards">
            <p>{ iten.title }</p>
            <img src={ iten.thumbnail } alt={ iten.title } />
            <h2>{ `R$${ iten.price }` }</h2>
            <button onClick={ () => { getProduct(iten) } }>Comprar</button>
          </div>
        )) }
      </div>
    </div>
  );
};

export default ShowItens