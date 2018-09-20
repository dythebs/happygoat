import React from 'react'
import './personalC.css'
import { Avatar, Form, Icon, Input, Button, Checkbox, Radio ,message} from "antd";
import RadioGroup from '../../../node_modules/antd/lib/radio/group';
import { withFormik } from "formik";
import * as yup from 'yup';
import ajaxhost from '../../ajaxhost';
const FormItem = Form.Item;
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 0 表示只读，1 表示编辑
      type: 0,
      // 1 女 2 男
      username: 'ZZZ',
      phone: '18774900335',
      sex: '',
      tip: '30桌以上的婚礼，如何来安排敬酒环节呢？桌数在30桌以上的注定要分批敬酒了。每场仪式结束后在换装之间就要开始敬酒，并且要有优先安排，先敬长辈和领导，因为通常这批宾客是不会闹的。把“钉子户”们放到最后敬酒，甚至可以送走来宾后再跟“钉子户”们耗战到底。当然，如果父母能够同意的话不妨吧敬酒环节取消，用点蜡烛等仪式来代替。',
      erpassword: '',
      ephone: '',
      rpassword: this.props.values.rpassword,
    }
    this.clickSetting = this.clickSetting.bind(this);
    this.handleRepassword = this.handleRepassword.bind(this);
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
    if (this.validataPhone(this.props.uphone)) {
      let formData = {};
      let that = this;
      // formData.phonenumber = sessionStorage.getItem('phone');
      formData.phonenumber = this.props.values.uphone;
      formData.username = this.props.values.uname;
      formData.city = this.props.values.ucity;
      formData.password = this.props.values.password;
      console.log(formData.phonenumber);
      fetch(ajaxhost + '/edit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json,text/plain,*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        if (res.ok) {
          res.json().then(function (result) {
            if (result.code === 200) {
              console.log(result);
              if (result.message === 'Success') {
                message.success('修改成功')
                that.setState({
                  phone: formData.phonenumber,
                  username: result.data.username
                },
                  that.clickSetting())
              }
            }
          })
        }
      })
    } else {
      this.setState({
        ephone: '请输入正确的手机号'
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
    let formData = {};
    let that = this;
    // formData.phonenumber = sessionStorage.getItem('phone');
    formData.phonenumber = '18774851735';
    console.log(formData.phonenumber);
    fetch(ajaxhost + '/getMessage', {
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      if (res.ok) {
        res.json().then(function (result) {
          if (result.code === 200) {
            console.log(result);
            that.setState({
              phone: formData.phonenumber,
              sex: result.data.sex,
              username: result.data.username
            })
          }
        })
      }
    })
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
    const { type, phone, sex, username, ephone, erpassword, rpassword, tip } = this.state;

    let form = '';
    let tip_ = '';
    if (type === 0) {
      form = <div className='info_display'>
        <p>用户名:<span>{username} </span></p>
        <p>性别:<span>{sex} </span></p>
        <p>绑定手机号:<span>{phone}</span></p>
      </div>;
      tip_ = <div className='content tip'>
      <h3>结婚攻略</h3>
        <p>{tip}</p>
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

        <FormItem>
          <Input
            name='ucity'
            // <Icon type="environment" theme="outlined" />
            prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="城市"
            value={values.ucity}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>

        {/* <FormItem label='性别'>
          <RadioGroup className='form_sex' onChange={this.onChange} value={this.state.sex}>
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
          </RadioGroup>
        </FormItem> */}
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
          <div className={['content', type === 1 ? 'clickedinfo' : ''].join(' ')}>
            {form}
          </div>
          {tip_}
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
  mapPropsToValues: () => ({ uname: "", uphone: "", password: "", rpassword: "", ucity: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(Info);