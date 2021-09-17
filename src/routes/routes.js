import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import MoviesDetails from '../components/container/MoviesDetails';
import Main from '../components/container/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/movie/:id" component={MoviesDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
