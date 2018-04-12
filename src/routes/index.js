import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import MyLoadingComponent from './common/MyLoadingComponent';

const AsyncHome = Loadable({
  loader: () => import('../pages/Home/Home'),
  loading: MyLoadingComponent
});

const AsyncMembers = Loadable({
  loader: () => import('../pages/Members/Members'),
  loading: MyLoadingComponent
});

const routeList = [
  { path: '/', component: AsyncHome },
  { path: '/members', component: AsyncMembers }
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
