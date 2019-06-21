import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';

const AppRouter = props => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;