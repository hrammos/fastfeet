import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Order from '../pages/Order';
import Deliveryman from '../pages/Deliveryman';
import Recipient from '../pages/Recipient';
import Problem from '../pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" component={Order} isPrivate />
      <Route path="/deliverymans" component={Deliveryman} isPrivate />
      <Route path="/recipients" component={Recipient} isPrivate />
      <Route path="/problems" component={Problem} isPrivate />
    </Switch>
  );
}
