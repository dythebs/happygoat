import React from 'react'
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;
const operations = <h1 className='title'>我的订单</h1>;
class Order extends React.Component {
   render(){
    return(
      <div className='order'>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="待店家确认" key="1">Content of tab 1</TabPane>
          <TabPane tab="店家确认成功" key="2">Content of tab 2</TabPane>
          <TabPane tab="已完成" key="3">Content of tab 3</TabPane>
        </Tabs>
      </div>
    );
}}

export default Order;