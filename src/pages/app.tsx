/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-04 11:04:26
 * @LastEditors: itangbei@sina.com
 * @LastEditTime: 2022-07-06 18:17:41
 * @Description: 
 * Copyright (c) 2022 by tangbei itangbei@sina.com, All Rights Reserved. 
 */
import * as React from 'react';
import { BrowserRouter as HistoryRouter } from 'react-router-dom';
import Router from '@/routes';
import '@/pages/app.less';

const App: React.FC = () => {
  return (
    <HistoryRouter>
      <Router />
    </HistoryRouter>
  );
}

export default App;