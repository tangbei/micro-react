import React from 'react';
import { Tabs } from 'antd';
import { ThunderboltOutlined, ShakeOutlined, SolutionOutlined, InsertRowAboveOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const { TabPane } = Tabs;

const TabList = [
  {
    tab: 'tab_1',
    key: '1',
    icon: <ThunderboltOutlined />,
  },
  {
    tab: 'tab_2',
    key: '2',
    icon: <ShakeOutlined />,
  },
  {
    tab: 'tab_3',
    key: '3',
    icon: <SolutionOutlined />,
  },
  {
    tab: 'tab_4',
    key: '4',
    icon: <InsertRowAboveOutlined />,
  },
];

const onChange = () => {}

const HeaderTab: React.FC = () => {
  return (
    <div className={styles.tab}>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
      >
        {
          TabList.map((item) => {
            return (
              <TabPane
                tab={
                  <span>
                    {item.icon}
                    {item.tab}
                  </span>
                }
                key={item.key}
              />
            );
          })
        }
      </Tabs>
    </div>
  );
};

export default HeaderTab;