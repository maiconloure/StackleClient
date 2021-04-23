import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from '../pages/landing';
import { Home } from '../pages/home';

const Router = () => {
  return (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Router;