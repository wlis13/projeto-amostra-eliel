import { useEffect, useState } from 'react';
import { getCategories } from '../util/api';
import MyContext from './MyContext';

const Provider = ({ children }) => {

  const [productsCart, setProductsCart] = useState([{
    category_id: '',
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
    const { title, thumbnail, price, category_id } = itens;
    const objectProduct = {
      category_id,
      title,
      thumbnail,
      price,
    };
    setProductsCart((prevState) => ([...prevState, objectProduct]));
  };

  const removeProductsCart = (key) => {
    const remove = productsCart.filter((item, index) => index !== key);
    setProductsCart(remove);

  };

  const contextValues = {
    categories,
    getProduct,
    removeProductsCart,
    productsCart,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
