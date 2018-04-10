import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import MyLoadingComponent from './common/MyLoadingComponent';

const AsyncHome = Loadable({
  loader: () => import('../pages/Home/Home'),
  loading: MyLoadingComponent
});

const AsyncList = Loadable({
  loader: () => import('../pages/List/List'),
  loading: MyLoadingComponent
});

const routeList = [
  { path: '/', component: AsyncHome },
  { path: '/list', component: AsyncList }
];

const routes = (
  <Switch>
    {routeList.map((item, index) => (
      <Route
        key={index.toString()}
        exact
        component={item.component}
        path={item.path}
      />
    ))}
  </Switch>
);

export default routes;
