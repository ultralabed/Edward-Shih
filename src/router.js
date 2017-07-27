import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Base from './components/Base';

const componentRoutes = {
  component: Base,
  path: '/',
}

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes}/>
  );
};

export default Routes;
