import React from 'react'
import './personalC.css'
import { Avatar } from "antd";
class Info extends React.Component {
   render(){
    return(
      <div className='info'>
        <div className='p_header'>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: '#87d068' }} icon="plus" alt='绑定另一半' />
        </div>
      </div>
    );
}}

export default Info;