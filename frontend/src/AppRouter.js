import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import LoanSearchPage from './Pages/LoanSearchPage';

const AppRouter = props => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/profile' component={ProfilePage}></Route>
      <Route exact path='/loan-search' component={LoanSearchPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;