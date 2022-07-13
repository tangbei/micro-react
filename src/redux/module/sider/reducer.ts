/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-12 13:57:49
 * @LastEditTime: 2022-07-12 16:53:54
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import { AnyAction } from 'redux';
import { UPDATED_COLLAPSE } from '../../mutation-types';

const siderState: boolean = false;

export const updateCollapse = (state = siderState, action: AnyAction) => {
  const { isCollapse } = action;
  switch(action.type){
    case UPDATED_COLLAPSE:
      // debugger;
      return !isCollapse;
    default:
      return state;
  }
}