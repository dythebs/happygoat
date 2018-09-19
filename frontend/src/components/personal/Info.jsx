import React from 'react'
import './personalC.css'
import { Avatar, Form, Icon, Input, Button, Checkbox, Radio } from "antd";
import RadioGroup from '../../../node_modules/antd/lib/radio/group';
import { withFormik } from "formik";
import * as yup from 'yup';

const FormItem = Form.Item;
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 0 表示只读，1 表示编辑
      type: 0,
      // 1 女 2 男
      sex: 1,
      user_data: {
        name: 'ZZZ',
        phone: '18774900335',
      },
      erpassword: '',
      ephone: '',
      rpassword: this.props.values.rpassword,
    }
    this.clickSetting = this.clickSetting.bind(this);
  }

    validataPhone = (number) => {
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(number)) {
      return false;
    } else {
      return true;
    }
  }

  clickSetting() {
    let temp = this.state.type;
    if (temp === 0) {
      this.setState({
        type: 1
      })
    } else {
      this.setState({
        type: 0
      })
    }
  }
  handleSubmit = (e) => {
    if(this.validataPhone(this.props.uphone)){

    } else {
      this.setState({
        ephone:'请输入正确的手机号'
      })
    }
    // e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  componentDidMount() {
    // 请求用户个人信息数据
  }

  handleRepassword(e) {
    console.log('s');
    this.setState({
      rpassword: e.target.value
    })
    if (this.props.values.rpassword !== this.props.values.password) {
      console.log("bu");
      this.setState({
        erpassword: '两次输入密码不一致'
      })
    }
    setTimeout(() => {
      this.setState({
        erpassword: ''
      })
    }, 1000);
  }
  render() {
    //  const { getFieldDecorator } = this.props.form;
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;
    const { type, user_data, ephone, erpassword, rpassword } = this.state;

    let form = '';
    if (type === 0) {
      form = <div className='info_display'>
        <p>用户名:<span>{user_data.name} </span></p>
        <p>性别:<span>XXXX </span></p>
        <p>绑定手机号:<span>{user_data.phone}</span></p>
      </div>
    } else {
      form = <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem
          help={touched.uname && errors.uname ? errors.uname : ''}
        >
          <Input
            name="uname"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="用户名"
            value={values.uname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem label='性别'>
          <RadioGroup className='form_sex' onChange={this.onChange} value={this.state.sex}>
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem
          help={touched.uphone && errors.uphone ? errors.uphone : '' + ephone}
        >
          <Input
            ref='uphone'
            name="uphone"
            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="手机号"
            value={values.uphone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem
          help={touched.password && errors.password ? errors.password : ''}
        >
          <Input
            name="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem
          help={erpassword !== '' ? erpassword : ''}
        >
          <Input
            name="rpassword"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            value={rpassword}
            onChange={this.handleRepassword}
          // onInput={this.handleChange}
          // onBlur={this.handleRepassword}
          />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            保存修改
          </Button>
        </FormItem>
      </Form>
    }
    return (
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
  }
}

const passwordNotLongEnough = "密码至少要有八位";
const unameNotLongEnough = "用户名至少要三个字符";
const phoneNotValidate = "请输入正确的手机号"

// formik has an intergation with yup
const validationSchema = yup.object().shape({
  uname: yup
    .string()
    .min(3, unameNotLongEnough)
    .max(255)
    .required(),
  uphone: yup
    .string()
    // .matches(/\d/g,'请输入正确的手机号')
    .max(11, phoneNotValidate)
    .min(11, phoneNotValidate)
    .required("请输入手机号"),
  password: yup
    .string()
    .min(8, passwordNotLongEnough)
    .max(255)
    .required("请输入密码"),
  rpassword: yup
    .string()
    .required("请再次输入密码"),
});

export default Info = withFormik({
  validationSchema,
  mapPropsToValues: () => ({ uname: "", uphone: "", password: "", rpassword: ""}),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(Info);