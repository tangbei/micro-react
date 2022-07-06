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

const ConLayout = () => {
  return (
    <Layout className={style.layout}>
      <MicroSider>
        <HeaderLogo></HeaderLogo>
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