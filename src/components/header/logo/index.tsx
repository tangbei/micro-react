import React from "react";
import { useNavigate } from "react-router-dom";
import { TrophyOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { Space } from "antd";

const HeaderLogo: React.FC = (props: any) => {

  const navigate = useNavigate();
  const redirectTo = (path: string) => {
    navigate(path);
  };
  
  return (
    <div className={styles.logo} role="button" onClick={() => redirectTo('/')}>
      <Space>
        <TrophyOutlined style={{ fontSize: 30, color: '#1890ff' }} />
        <span style={{ fontSize: 20, fontWeight: 'bold' }}>Micro-React</span>
      </Space>
    </div>
  );
};

export default HeaderLogo;