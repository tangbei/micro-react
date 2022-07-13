/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-04 11:04:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-13 09:06:40
 * @Description: 
 * Copyright (c) 2022 by tangbei itangbei@sina.com, All Rights Reserved. 
 */
import * as React from 'react';
import { BrowserRouter as HistoryRouter } from 'react-router-dom';
import Router from '@/routes';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux';
import '@/pages/app.less';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HistoryRouter>
          <Router />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;