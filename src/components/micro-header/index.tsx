import React, { FC } from 'react';
import { Layout, Space, Dropdown, Menu, Tag } from 'antd';
import HeaderModule from '@/components/header/module';
import { UserOutlined, MenuFoldOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const MircoHeader: React.FC = (props: any) => {
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

  return (
    <Layout.Header className={styles.header} {...props}>
      <MenuFoldOutlined style={{ fontSize: 20, padding: '0 10px' }} />
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

export default MircoHeader;