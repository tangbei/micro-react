import React from 'react';
import Loadable from '@loadable/component';
import { IRouteObject } from '..';

const Layout = Loadable(() => import('@/pages/layout'), {});
const Home = Loadable(() => import('@/pages/home'), {});

const HomeRouter: IRouteObject[] = [
  {
    path: '/',
    name: '首页',
    key: '/',   
    element: <Layout />,
    children: [
      {
        path: '/',
        name: 'home',
        key: 'home',
        element: <Home />
      },
    ]
  }
];

export default HomeRouter;