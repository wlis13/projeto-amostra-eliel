import { useCallback, useEffect, useState } from 'react';
import { getCategories } from '../util/api';
import MyContext from './MyContext';

const Provider = ({ children }) => {

  const [productsCart, setProductsCart] = useState([{
    category_id: '',
    title: '',
    thumbnail: '',
    price: 0.
  }]);

  const [valueCategory, setValueCategory] = useState([]);

  const getProducts = (itens) => {
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

  const fetchTest = useCallback(async () => {
    const get = await getCategories();
    console.log(get);
    setValueCategory(get)
  }, [])

  useEffect(() => {
    fetchTest();
  }, [fetchTest]);


  const [getTarget, setGetTarget] = useState('');
  const getValue = ({ target }) => {
    setGetTarget(target.innerText);
  };

  const contextValues = {
    getProducts,
    removeProductsCart,
    getValue,
    productsCart,
    valueCategory,
    getTarget,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
