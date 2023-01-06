import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../style/category.css';

const Categories = () => {

  const { getProducts, resultClick } = useContext(MyContext);

  return (
    <div>
      <div className="container-cards">
        { resultClick.map((iten, index) => (
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

export default Categories;