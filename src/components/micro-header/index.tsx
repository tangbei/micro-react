/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-05 15:05:19
 * @LastEditTime: 2022-07-13 08:36:45
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import React, { FC, useEffect } from 'react';
import { Layout, Space, Dropdown, Menu, Tag } from 'antd';
import HeaderModule from '@/components/header/module';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { updateCollapse } from '@/redux/module/sider/action';

import styles from './index.module.less';
import { connect } from 'react-redux';

const MircoHeader: React.FC = (props: any) => {
  console.log('props', props);
  const menuItems = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          2st menu item
        </a>
      )
    }
  ];

  useEffect(() => {
  }, []);

  return (
    <Layout.Header className={styles.header}>
      <div
        style={{ fontSize: 20, padding: '0 10px' }}
        onClick={() => {
          console.log('aaaa');
          debugger
          props.updateCollapse(props.isCollapse);
        }}
      >
        { props.isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      </div>
      
      <div className={styles.meta}>
        <div className={styles.meta_menu}>
          <HeaderModule />
        </div>
        <div className={styles.meta_right}>
          <Dropdown
            overlay={(<Menu items={menuItems} />)}
            >
            <Space>
              <Tag>{process.env.NODE_ENV}</Tag>
              <UserOutlined />
              <span>唐贝</span>
            </Space>
          </Dropdown>
        </div>
      </div>
    </Layout.Header>
  );
}

const mapStateToProps = (state: any) => ({ isCollapse: state.isCollapse });
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(MircoHeader);