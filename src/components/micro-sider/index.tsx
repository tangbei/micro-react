/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-06 08:37:02
 * @LastEditTime: 2022-07-12 18:56:02
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

const MicroSider = (props: any) => {
  
  useEffect(() => {
  }, []);

  return (
    <Layout.Sider
      width={208}
      collapsed={props.isCollapse}
      theme={'light'}
      style={{ height: '100%' }}
    >
      {props.children}
    </Layout.Sider>
  );
};

const mapStateToProps = (state: any) => ({ isCollapse: state.isCollapse });
export default connect(mapStateToProps)(MicroSider);