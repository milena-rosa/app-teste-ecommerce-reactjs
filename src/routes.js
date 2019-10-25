import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Payment from './pages/Payment';
import Purchase from './pages/Purchase';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Payment} />
      <Route path="/purchase" component={Purchase} />
      <Route path="/products/:id" component={Details} />
    </Switch>
  );
}
