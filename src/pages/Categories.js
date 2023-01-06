import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../style/category.css';
import valuesCategory from '../util/category.json';

const Categories = () => {

  const { getValue } = useContext(MyContext);

  return (
    <div className="category-menu">
      { valuesCategory && valuesCategory.map((iten, index) => (
        <div key={ index }>
          <p onClick={ (event) => { getValue(event) } }>{ iten.name }</p>
        </div>
      )) }

    </div>
  );
};

export default Categories;