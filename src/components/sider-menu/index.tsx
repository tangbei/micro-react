/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-06 09:03:16
 * @LastEditTime: 2022-07-13 08:48:40
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import React from "react";
import { PieChartOutlined, BankOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from "antd";
import styles from './index.module.less';

type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <BankOutlined />),
    getItem('Option 3', '3', <SettingOutlined />),
  
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
  
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];

const SiderMenu: React.FC = (props: any) => {

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      // style={{ width: 208 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      className={styles.menu}
      items={items}
    />
  );
};

export default SiderMenu;