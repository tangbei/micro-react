import { Layout } from "antd";
import React from "react";

import style from './index.module.less';

const MicroFooter: React.FC = (props: any) => {

  return (
    <Layout.Footer
      className={style.footer}
      {...props}
    >
      <a
        style={{ margin: 'auto' }}
        href="http://www.github.con/"
        target="_blank"
        rel="noreferrer"
      >
        2022 © Micro-React By Tong Technology.
      </a>
    </Layout.Footer>
  )
};

export default MicroFooter;