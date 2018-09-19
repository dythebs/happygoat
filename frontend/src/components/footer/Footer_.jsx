import React from 'react'
import "./footer_.css"
class Footer_ extends React.Component {
   render(){
    return(
      <footer_ className={scrollToBottom?"topper":""}>
      <div className="footer-area">
      <P>省钱省心·自由选择</P>
      </div>
      <div className="footer-area2">
      <p>专业服务·贴心管家</p>
      </div>
      <div className="footer-">
        <p>关于我们</p>
        <br/>
        <br/>
        <p>加入我们</p>
        <br/>
        <br/>
        <p>联系我们</p>
      </div>
      </footer_>
    );
}}

export default Footer_;