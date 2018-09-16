import React from 'react'
import './personalC.css'
import { Avatar, Form, Icon, Input, Button, Checkbox, Radio } from "antd";
import RadioGroup from '../../../node_modules/antd/lib/radio/group';
const FormItem = Form.Item;
class Info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // 0 表示只读，1 表示编辑
      type:0,
      // 1 女 2 男
      sex:1,
      user_data:{
        name:'ZZZ',
        phone:'18774900335',

      }
    }
    this.clickSetting = this.clickSetting.bind(this);
  }

  clickSetting(){
    let temp = this.state.type;
    if(temp === 0){
      this.setState({
        type:1
      })
    }else{
      this.setState({
        type:0
      })
    }
  }
  handleSubmit = (e) => {
    // e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  componentDidMount(){
    // 请求用户个人信息数据
  }

   render(){
    //  const { getFieldDecorator } = this.props.form;
    const {type,user_data} = this.state;
    let form = '';
    if(type === 0){
      form = <div className='info_display'>
        <p>用户名:<span>{user_data.name} </span></p>
        <p>性别:<span>XXXX </span></p>
        <p>绑定手机号:<span>{user_data.phone}</span></p>
      </div>
    }else{
      form = <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {/* {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })( */}
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          {/* )} */}
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type='phone' style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="绑定手机号"/>
        </FormItem>
        <FormItem label='性别'>
          <RadioGroup className='form_sex' onChange={this.onChange} value={this.state.sex}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          {/* {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })( */}
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="输入密码" />
          {/* )} */}
        </FormItem>
        <FormItem>
          {/* {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })( */}
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入密码" />
          {/* )} */}
        </FormItem>
        <FormItem>
          {/* {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })( */}
          {/* <Checkbox>Remember me</Checkbox> */}
          {/* )} */}
          {/* <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a> */}
        </FormItem>
      </Form>
    }
    return(
      <div className='info'>
        <div className='helper'></div>
        <div className='p_header'>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} icon="plus" alt='绑定另一半' />
        </div>
       <div className='helper_content'>
          <div className='content'>
            {form}
          </div>
          <div className='setting' onClick={this.clickSetting}>
            <Icon type="setting" theme="outlined" />
          </div>
       </div>
      </div>
    );
}}

export default Info;