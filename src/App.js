
import React from 'react';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Empresas from './pages/Empresas';
import HeaderPage from './pages/HeaderPage';
import Investimentos from './pages/Investimentos';
import Login from './pages/Login';
import Planos from './pages/Planos';
import CardsPage from './pages/CardsPage';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HeaderPage } />
          <Route path="/card-page" component={ CardsPage } />
          <Route exact path="/Login" component={ Login } />
          <Route exact path="/Empresas" component={ Empresas } />
          <Route exact path="/Investimentos" component={ Investimentos } />
          <Route exact path="/Planos" component={ Planos } />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
