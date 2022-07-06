import React from "react";
import { Menu } from 'antd';
import { MacCommandOutlined, MedicineBoxOutlined, InboxOutlined, NotificationOutlined } from '@ant-design/icons';

type HeaderModule = {
  key: string,
  label: string,
  icon: any,
};
const HeaderMoudleList: Array<HeaderModule> = [
  {
    key: 'tab1',
    label: 'Navigation1',
    icon: () => {<MacCommandOutlined />},
  },
  {
    key: 'tab2',
    label: 'Navigation2',
    icon: () => {<MedicineBoxOutlined />},
  },
  {
    key: 'tab3',
    label: 'Navigation3',
    icon: () => {<InboxOutlined />},
  },
  {
    key: 'tab4',
    label: 'Navigation4',
    icon: () => {<NotificationOutlined />},
  }
];

const HeaderModule = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[HeaderMoudleList[1].key]}>
      {
        HeaderMoudleList.map((item: HeaderModule) => {
          return (
            <Menu.Item key={item.key} icon={<MacCommandOutlined />}>
              {item.label}
            </Menu.Item>
          )
        })
      }
    </Menu>
  );
};

export default HeaderModule;