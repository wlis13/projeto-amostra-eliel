import { useEffect, useState } from 'react';
import { getCategories } from '../util/api';
import MyContext from './MyContext';

const Provider = ({ children }) => {

  const [productsCart, setProductsCart] = useState([{
    title: '',
    thumbnail: '',
    price: 0.
  }]);

  const categories = async () => {
    const categoriesResult = await getCategories();
    return categoriesResult;
  }

  useEffect(() => {
    categories();

  }, []);

  const getProduct = (itens) => {
    const { title, thumbnail, price } = itens;
    const objectProduct = {
      title,
      thumbnail,
      price,
    };
    setProductsCart((prevState) => ([...prevState, objectProduct]));
  };

  const contextValues = {
    categories,
    getProduct,
    productsCart,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
