/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-19 09:48:40
 * @LastEditTime: 2022-07-26 18:00:23
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import { Button } from 'antd';
import React from 'react';



const ReactHOC = (WrapComponent: any) => {

  return class Index extends React.Component {
    // constructor(props){
      // super(props);

      state = {
        visible: false
      };
    // }

    setVisible = () : void => {
      this.setState({ visible: !this.state.visible });
    }

    render(): React.ReactNode {
      const { visible } = this.state;
      return (
        <div>
          <Button onClick={this.setVisible}>挂载组件</Button>
          {
            visible ? <WrapComponent /> : null
          }
        </div>
      );
    }
  }
};

const Index: React.Component = () => {
  return (
    <div>挂载玩的内容</div>
  );
};



export default ReactHOC(Index);
