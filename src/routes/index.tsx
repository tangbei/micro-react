/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-05 11:02:32
 * @LastEditors: itangbei@sina.com
 * @LastEditTime: 2022-07-06 18:23:01
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import * as React from 'react';
import Loadable from '@loadable/component';
import { RouteObject, useRoutes } from 'react-router-dom';

const Layout = Loadable(() => import('@/pages/layout'), {});
const Home = Loadable(() => import('@/pages/home'), {});
const Plane = Loadable(() => import('@/pages/plane'), {});

interface IRouteObject extends RouteObject {
  name: string,
  key: string,
  icon?: React.ReactNode,
  children?: IRouteObject[],
}

const rootRouter: IRouteObject[] = [
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
      {
        path: '/plane',
        name: '可视大盘',
        key: '/learn1',
        element: <Plane />
      },
      {
        path: '/learn1',
        name: '学习1',
        key: '/learn1',
      }
    ],
  },
  {
    path: '/login',
    name: '登录',
    key: '/login',
    element: <Home />,
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
}

export default Router;