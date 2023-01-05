import { useEffect } from 'react';
import { getCategories } from '../util/api';
import MyContext from './MyContext';

const Provider = ({ children }) => {

  const categories = async () => {
    const categoriesResult = await getCategories();
    return categoriesResult;
  }

  useEffect(() => {
    categories();

  });

  const contextValues = {
    categories,
  }

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
