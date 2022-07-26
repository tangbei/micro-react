/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-04 11:04:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-14 09:25:25
 * @Description: 
 * Copyright (c) 2022 by tangbei itangbei@sina.com, All Rights Reserved. 
 */
import * as React from 'react';
import { BrowserRouter as HistoryRouter } from 'react-router-dom';
import Router from '@/routes';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthRouter from '@/routes/auth';
import '@/pages/app.less';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HistoryRouter>
          <AuthRouter>
            <Router />
          </AuthRouter>
        </HistoryRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;