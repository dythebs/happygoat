import React from 'react'
// import './signIn.css'
class Sign extends React.Component {
  temp(){
    // $('#signup').click(function () {
    //   $('.pinkbox').css('transform', 'translateX(80%)');
    //   $('.signin').addClass('nodisplay');
    //   $('.signup').removeClass('nodisplay');
    // });

    // $('#signin').click(function () {
    //   $('.pinkbox').css('transform', 'translateX(0%)');
    //   $('.signup').addClass('nodisplay');
    //   $('.signin').removeClass('nodisplay');
    // });

  }
  render() {
    return (
      <div class="sign-container">
        <div class="welcome">
          <div class="pinkbox">
            <div class="signup nodisplay">
              <h1>注册</h1>
              <form autocomplete="off">
                <input type="text" placeholder="用户名" />
                <input type="email" placeholder="手机号" />
                <input type="password" placeholder="密码" type="password" placeholder="重复密码" />
                <button class="button submit">确定 </button>
              </form>
            </div>
            <div class="signin">
              <h1>登录</h1>
              <form class="more-padding" autocomplete="off">
                <input type="text" placeholder="用户名/手机号" />
                <input type="password" placeholder="密码" />
                <div class="checkbox">
                  <input type="checkbox" id="remember" /><label for="remember">记住我</label>
                </div>
                <button class="button submit">登录</button>
              </form>
            </div>
          </div>
          <div class="leftbox">
            <h2 class="title"><span>喜洋洋婚庆</span><br />竭诚为您服务</h2>
            <p class="desc">选择最完美的<span>婚礼</span></p>
            <img class="flower smaller" src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg" alt="1357d638624297b" border="0" />
            <p class="account">已有账号?</p>
            <button class="button" id="signin">登录</button>
          </div>
          <div class="rightbox">
            <h2 class="title"><span>喜洋洋婚庆</span><br />竭诚为您服务</h2>
            <p class="desc">选择最完美的<span>婚礼</span></p>
            <img class="flower" src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg" />
            <p class="account">尚无账号?</p>
            <button class="button" id="signup">注册</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sign;