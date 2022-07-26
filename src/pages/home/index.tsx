/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-05 10:56:51
 * @LastEditTime: 2022-07-14 09:02:10
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import React, { useEffect } from 'react';
import HttpRequest from '@/api';
import { Button } from 'antd';
import { testGet, testPost } from '@/api/module/home';

const ConLayout: React.FC = () => {

  const onGet = async () => {
    const data = await testGet();
    console.log('get',data);
  };

  const onPost = async () => {
    const data = await testPost();
    console.log('post',data);
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      我是首页
      <Button onClick={onGet}>GET请求</Button>
      <Button onClick={onPost}>POST请求</Button>
    </div>
  );
}

export default ConLayout;