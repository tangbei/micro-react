/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-07 11:06:07
 * @LastEditTime: 2022-07-13 09:06:48
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import { AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore as createStore, Store } from 'redux';
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import { updateCollapse } from './module/sider/reducer';
import storage from 'redux-persist/lib/storage';

// 持久化存储配置
const persistConfig = {
  key: 'micro-state',
  storage,
};

// 合并reducer
const reducer = combineReducers({
  isCollapse: updateCollapse,
});

const persistReducerConfig = persistReducer(persistConfig, reducer);
// const mid = applyMiddleware(reduxThunk, reduxPromise);
// 创建store
const store: Store = createStore(persistReducerConfig);

// 创建持久化 store
const persistor = persistStore(store);

export {
  store,
  persistor
};