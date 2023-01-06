import React, { useState } from 'react';
import '../style/category.css';
import { getProductById } from '../util/api';
import valuesCategory from '../util/category.json';

const Categories = () => {

  const [result, setResult] = useState([]);

  const getValue = async ({ target }) => {
    const productById = await getProductById(target.innerText);
    setResult(productById.results);
  };

  const displayFix = () => {
    const options = document.querySelector('.category-menu');
    options.classList.add('menu-display');
  };

  const displayOut = () => {
    const options = document.querySelector('.category-menu');
    options.classList.remove('menu-display');
  }

  return (
    <div onMouseOut={ displayOut } onMouseOver={ displayFix } className="category-menu">
      { valuesCategory && valuesCategory.map((iten, index) => (
        <div key={ index }>
          <p onClick={ getValue }>{ iten.name }</p>
        </div>
      )) }
    </div>
  );
};

export default Categories;