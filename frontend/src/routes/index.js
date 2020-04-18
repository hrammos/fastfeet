import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Order from '../pages/Order';
import FormOrder from '../pages/Order/FormOrder';
import Deliveryman from '../pages/Deliveryman';
import Recipient from '../pages/Recipient';
import Problem from '../pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" exact component={Order} isPrivate />
      <Route path="/orders/new" exact component={FormOrder} isPrivate />
      <Route
        path="/orders/edit/:id"
        exact
        component={FormOrder}
        isPrivate
        isUpdate
      />

      <Route path="/deliverymans" component={Deliveryman} isPrivate />
      <Route path="/recipients" component={Recipient} isPrivate />
      <Route path="/problems" component={Problem} isPrivate />
    </Switch>
  );
}
