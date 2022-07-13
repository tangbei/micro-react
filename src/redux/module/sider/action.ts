/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-08 15:45:57
 * @LastEditTime: 2022-07-12 15:31:57
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import * as mutationTypes from '../../mutation-types';

/**
 * 左侧menu的更新动作
 * @param isCollapse 
 * @returns 
 */
export const updateCollapse = (isCollapse: boolean) => ({
    type: mutationTypes.UPDATED_COLLAPSE,
    isCollapse
});