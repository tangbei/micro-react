/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-06 12:56:54
 * @LastEditTime: 2022-07-12 18:56:11
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { TrophyOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { Space } from "antd";
import { connect } from "react-redux";

const HeaderLogo: React.FC = (props: any) => {

  const navigate = useNavigate();
  const redirectTo = (path: string) => {
    navigate(path);
  };
  
  return (
    <div
      className={styles.logo}
      style={{ width: `${props.isCollapse ? '' : '208px' }` }}
      role="button"
      onClick={() => redirectTo('/')}
    >
      <Space>
        <TrophyOutlined style={{ fontSize: 30, color: '#1890ff' }} />
        {
          !props.isCollapse && <span style={{ fontSize: 20, fontWeight: 'bold' }}>Micro-React</span>
        }
      </Space>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ isCollapse: state.isCollapse });

export default connect(mapStateToProps)(HeaderLogo);