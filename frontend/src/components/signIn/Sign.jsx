import React from 'react'
import './signIn.css'
import * as yup from 'yup';
import { Form, Icon, Input, message } from 'antd';
import { withFormik } from "formik";
import ajaxhost from '../../ajaxhost';
import { connect } from 'react-redux'
import * as Actions from "../../action/ActionType"

const FormItem = Form.Item;
class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 0 加signInClick 显示登录1加signupClick,signIn nodisplay
      pinkbox_: 0,
      erpassword: '',
      ephone: '',
      rpassword: this.props.values.rpassword,
      verifyCodeText:'发送验证码'
    }
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleRepassword = this.handleRepassword.bind(this);
    this.handlesend = this.handlesend.bind(this);
  }

  handleSignin() {
    this.setState({
      pinkbox_: 0
    })
  }
  handleSignup() {
    // let {pinkbox_} = this.state;
    this.setState({
      pinkbox_: 1
    })
  }

  handleSubmitLogin = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
    let formData = {};
    let that = this;
    formData.phonenumber = this.props.values.ulphone;
    formData.password = this.props.values.lpassword;
    console.log("params", formData);
    fetch(ajaxhost + '/login',{
      method:'POST',
      headers:{
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(formData)
    }).then((res) => {
      if(res.ok){
        res.json().then(function (result) {
          if(result.code === 200){
            if(result.data.status === 'success') {
              that.props.setToken(result.data.token);
              that.props.history.push('/home');
              sessionStorage.setItem('phone',formData.phonenumber)
              message.success('登录成功');
            } else if(result.data.status === 'failed') {
              message.warning('账号不存在或密码错误');
            }
          }
        })
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
    // let formData = new FormData();
    // formData.append('phonenumber',this.props.values.uphone);
    // formData.append('code',this.props.values.ucode);
    let formData = {};
    let that = this;
    formData.phonenumber = this.props.values.uphone;
    formData.password = this.props.values.password
    formData.code = this.props.values.ucode;
    console.log("params", formData);
    fetch(ajaxhost + '/regist', {
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      if (res.ok) {
        res.json().then(function (result) {
          console.log(result);
          if (result.code === 200) {
            console.log(result);
            message.info("注册成功")
            window.location.reload();
          } else if(result.code === 400){
            message.warning("验证码错误");
            that.refs.ucode.value = ''
          }
        })
      }
    }).catch((res) => {
      console.log(res);
    })
  }
  validataPhone = (number) => {
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(number)) {
      return false;
    } else {
      return true;
    }
  }
  handlesend() {
    let formData = {};
    console.log(this.props.values.uphone);
    let phone = this.props.values.uphone;
    if(phone.trim()===''){
      this.setState({
        ephone:'请输入手机号'
      })
    }else{
      if (this.validataPhone(phone)) {
        this.setState({
          verifyCodeText:'重新发送'
        })
        formData.phonenumber = this.props.values.uphone;
        // formData.append('phonenumber',this.props.values.uphone)
        fetch(ajaxhost + '/p_validation', {
          method: 'POST',
          headers: {
            'Accept': 'application/json,text/plain,*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then((res) => {
          if (res.ok) {
            res.json().then(function (result) {
              if (result.code === 200) {
                console.log("已发送");
                message.info('已发送')
              }
            })
          }
        })
      } else {
        this.setState({
          ephone: '请输入正确的手机号'
        })
      }
    }

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
    const { pinkbox_, erpassword, rpassword, ephone, verifyCodeText } = this.state;
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;
    // if()
    return (
      <div className="sign-container">
        <div className="welcome">
          <div className={["pinkbox", pinkbox_ === 0 ? 'signinClick' : 'signupClick'].join(' ')} ref='pinkbox'>
            <div className={["signup ", pinkbox_ === 0 ? 'nodisplay' : ''].join(' ')}>
              <h1>注册</h1>

              {/* <form autocomplete="off">
                <input type="text" name="email" placeholder="用户名" />
                <input type="email" placeholder="手机号" />
                <input type="password" placeholder="密码" />
                <input type="password" placeholder="重复密码" />
                <button className="button submit">确定 </button>
              </form> */}
              <Form onSubmit={this.handleSubmit}>
                {/* <FormItem
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
                </FormItem> */}
                <FormItem
                  help={pinkbox_ === 1 &&touched.uphone && errors.uphone ? errors.uphone : '' + ephone}
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
                  help={pinkbox_ === 1 &&touched.password && errors.password ? errors.password : ''}
                >
                  <Input
                    name="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormItem>
                <FormItem
                  help={pinkbox_ === 1 &&erpassword !== '' ? erpassword : ''}
                >
                  <Input
                    name="rpassword"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="重复密码"
                    value={rpassword}
                    onChange={this.handleRepassword}
                  // onInput={this.handleChange}
                  // onBlur={this.handleRepassword}
                  />
                </FormItem>
                <FormItem className='code'
                  help={pinkbox_ === 1 &&touched.ucode && errors.ucode ? errors.ucode : ''}
                >

                  <Input
                    name="ucode"
                    ref='ucode'
                    type="text"
                    placeholder=""
                    value={values.ucode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span style={{ color: '#fff' }} onClick={this.handlesend}>{verifyCodeText}</span>
                </FormItem>
                <button className="button submit" type="submit">确定</button>
              </Form>
            </div>
            <div className={["signin", pinkbox_ === 0 ? '' : 'nodisplay'].join(' ')}>
              <h1>登录</h1>
              <Form className="more-padding" onSubmit={this.handleSubmitLogin}>
                {/* <FormItem
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
                </FormItem>  */}
                <FormItem
                  help={pinkbox_ === 0 && touched.ulphone && errors.ulphone ? errors.ulphone : '' + ephone}
                >
                  <Input
                    name="ulphone"
                    prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="手机号"
                    value={values.ulphone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormItem>
                <FormItem
                  help={pinkbox_ === 0 && touched.lpassword && errors.lpassword ? errors.lpassword : ''}
                >
                  <Input
                    name="lpassword"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    value={values.lpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormItem>
                <div className="checkbox">
                  <input type="checkbox" id="remember" /><label htmlFor="remember">记住我</label>
                </div>
                <button className="button submit">登录</button>
              </Form>
            </div>
          </div>
          <div className="leftbox">
            <h2 className="title"><span>喜洋洋婚庆</span><br />竭诚为您服务</h2>
            <p className="desc">选择最完美的<span>婚礼</span></p>
            <img className="flower smaller" src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg" alt="1357d638624297b" border="0" />
            <p className="account">已有账号?</p>
            <button className="button" id="signin" onClick={this.handleSignin}>登录</button>
          </div>
          <div className="rightbox">
            <h2 className="title"><span>喜洋洋婚庆</span><br />竭诚为您服务</h2>
            <p className="desc">选择最完美的<span>婚礼</span></p>
            <img className="flower" src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg" />
            <p className="account">尚无账号?</p>
            <button className="button" id="signup" onClick={this.handleSignup}>注册</button>
          </div>
        </div>
      </div>
    );
  }
}

const emailNotLongEnough = "email must be at least 3 charaters"
const passwordNotLongEnough = "密码至少要有八位";
const invalidEmail = "email must be a valid email";
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
    .max(11, '请输入正确的手机号')
    .min(11, '请输入正确的手机号')
    .required("请输入手机号"),
  password: yup
    .string()
    .min(8, passwordNotLongEnough)
    .max(255)
    .required("请输入密码"),
  rpassword: yup
    .string()
    .required("请再次输入密码"),
  ucode:yup
    .string()
    .required('请输入验证码'),
  ulphone: yup
    .string()
    // .matches(/\d/g,'请输入正确的手机号')
    .max(11, '请输入正确的手机号')
    .min(11, '请输入正确的手机号')
    .required("请输入手机号"),
  lpassword: yup
    .string()
    .min(8, passwordNotLongEnough)
    .max(255)
    .required("请输入密码"),
});

const Sign_ = withFormik({
  validationSchema,
  mapPropsToValues: () => ({ uname: "", uphone: "", password: "", rpassword: "", ucode: "",ulphone:'',lpassword:'' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(Sign);

function mapStateToProps(state) {
  return {
    // data: state.data
  }
}
const mapDispatchToProps = dispatch => ({
  // addproduct: item => dispatch(Actions.addproduct(item))
  setToken:token => dispatch(Actions.setToken(token))
})
export default connect(mapStateToProps, mapDispatchToProps)(Sign_);