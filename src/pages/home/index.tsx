import React from 'react';
import { Layout } from 'antd';
import MircoHeader from '@/components/micro-header';
import HeaderLogo from '@/components/header/logo';
import MicroSider from '@/components/micro-sider';
import MicroFooter from '@/components/micro-footer';
import SiderMenu from '@/components/sider-menu';
import style from './index.module.less';

const { Content } = Layout;

const ConLayout: React.FC = () => {
  return (
    <div>我是首页</div>
  );
}

export default ConLayout;