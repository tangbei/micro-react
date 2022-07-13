/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-06 13:57:18
 * @LastEditTime: 2022-07-12 10:37:22
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import React from 'react';
import { Layout } from 'antd';
import MircoHeader from '@/components/micro-header';
import HeaderLogo from '@/components/header/logo';
import HeaderTab from '@/components/header/tab';
import MicroSider from '@/components/micro-sider';
import MicroFooter from '@/components/micro-footer';
import SiderMenu from '@/components/sider-menu';
import style from './index.module.less';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const ConLayout: React.FC = () => {
  return (
    <Layout className={style.layout}>
      <MicroSider>
        <HeaderLogo />
        <SiderMenu />
      </MicroSider>
      <Layout>
        <MircoHeader />
        <HeaderTab />
        <Content className={style.content}>
          <Outlet></Outlet>
        </Content>
        <MicroFooter />
      </Layout> 
    </Layout>
  );
}

export default ConLayout;