import React from 'react';
import { Layout } from 'antd';

const MicroSider = (props: any) => {
  
  return (
    <Layout.Sider
      width={208}
      collapsed={false}
      theme={'light'}
      style={{ height: '100%' }}
    >
      {props.children}
    </Layout.Sider>
  );
};

export default MicroSider;