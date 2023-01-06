import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Categories = () => {
  const { categories } = useContext(MyContext);
  console.log(categories);
  return (
    <div>
      {/* { categories && categories.map((iten, index) => (
        <div key={ index }>
          <p>{ iten.name }</p>
        </div>
      )) } */}
    </div>
  );
};

export default Categories;