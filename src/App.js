
import React from 'react';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Empresas from './pages/Empresas';
import HeaderPage from './pages/HeaderPage';
import Login from './pages/Login';
import Planos from './pages/Planos';
import CardsPage from './pages/CardsPage';
import CartUser from './pages/CartUser';
import ShowItens from './pages/showIitens';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HeaderPage } />
          <Route path="/card-page" component={ CardsPage } />
          <Route exact path="/Login" component={ Login } />
          <Route exact path="/Empresas" component={ Empresas } />
          <Route exact path="/cart-user" component={ CartUser } />
          <Route exact path="/Planos" component={ Planos } />
          <Route exact path="/show-itens" component={ ShowItens } />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
