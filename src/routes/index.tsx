/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-05 11:02:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-19 13:48:56
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import * as React from 'react';
import Loadable from '@loadable/component';
import { RouteObject, useRoutes } from 'react-router-dom';
import { HomeRouter, ReactRouter } from './module';

const Layout = Loadable(() => import('@/pages/layout'), {});
const Home = Loadable(() => import('@/pages/home'), {});
const Login = Loadable(() => import('@/pages/login'), {});
const Plane = Loadable(() => import('@/pages/plane'), {});
const Hoc = Loadable(() => import('@/pages/react/hoc'), {});

export interface IRouteObject extends RouteObject {
  name?: string,
  key?: string,
  icon?: React.ReactNode,
  children?: IRouteObject[],
}

export const routeArray: IRouteObject[] = [
  ...HomeRouter,
  ...ReactRouter
];
  
export const rootRouter: IRouteObject[] = [
  // {
  //   path: '/',
  //   name: '首页',
  //   key: '/',   
  //   element: <Layout />,
  //   children: [
  //    
  //   ],
  // },
  ...routeArray,
  {
    path: '/login',
    name: '登录',
    key: '/login',
    element: <Login />,
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
}

export default Router;