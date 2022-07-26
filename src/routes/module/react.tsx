/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-05 11:02:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-19 13:44:51
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import React from 'react';
import Loadable from '@loadable/component';
import { IRouteObject } from '..';

const Layout = Loadable(() => import('@/pages/layout'), {});
const Hoc = Loadable(() => import('@/pages/react/hoc'), {});

export const ReactRouter: IRouteObject[] = [
  {
    path: '/react',
    name: 'react学习',
    key: '/react',
    element: <Layout />,
    children: [
      {
        name: 'hoc高阶组件',
        path: '/react/hoc',
        key: '/react/hoc',
        element: <Hoc />
      },
    ],
  }
];

export default ReactRouter;