import * as React from 'react'
import "./topbar.css"
import {Icon} from 'antd'
import {NavLink} from 'react-router-dom'
export default class TopNavbar extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      collapse:false,
      scrollFixed:false,
      type:this.props.type
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.changeCollapseState = this.changeCollapseState.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }
  handleScroll(event){
    // let screenTopE = event.srcElement.body.scrollTop;
    const screenTopE = window.pageYOffset ||
      document.documentElement.scrollTop
    // alert(screenTop)
    if(screenTopE > 100 ){
      // console.log(screenTopE);
      this.setState({
        scrollFixed:true
      })
    }
    else if(screenTopE < 10){
      console.log(screenTopE);
      this.setState({
        scrollFixed: false
      })
    }
  }
  changeCollapseState(){
    const targetEl = this.state.collapse;
    this.setState({
      collapse:!targetEl
    })
  }
   render(){
     const {collapse,scrollFixed,type} = this.state;
    return(
      <div>
        <div className={["navbar-component", scrollFixed ? "scrolled" : ""].join(" ")}>
          <div className="navbar area">
            <a href="#" className="brand"><img src='/images/logo.png'/></a>

            <nav role="navigation" id="navigation" className={["list", collapse ? "-on" : ""].join(" ")}>
              {/* <a href="#" className="item -link">Home</a>  */}
              <NavLink to="/home" className={["item -link",type?'-home':''].join(' ')}>主页</NavLink>
              <NavLink to="/AnLi/1" className={["item -link",type?'-home':''].join(' ')}>案例推荐</NavLink>
              <NavLink to="/Sheying/1" className={["item -link", type ? '-home' : ''].join(' ')}>婚纱摄影</NavLink>

              {/* <a href="#" className={["item -link",type?'-home':''].join(' ')}>婚纱摄影</a> */}
              <a href="#" className={["item -link",type?'-home':''].join(' ')}>蜜月游</a>
              <a href="#" className={["item -link",type?'-home':''].join(' ')}>酒店推荐</a>
              {/* <a href="#" className={["item -link",type?'-home':''].join(' ')}>个人中心</a> */}
              <NavLink to="/Center" className={["item -link", type ? '-home' : ''].join(' ')}>个人中心</NavLink>
              <span className="item"><Icon type="environment" theme="outlined" className={type?'-home':''} style={{fontSize:'20px'}}/></span>
            </nav>

            <button data-collapse={collapse} onClick={this.changeCollapseState} data-target="#navigation" className={["toggle", collapse ? "-active" : ""].join(" ")}>
              <span className="icon" />
            </button>
          </div>
        </div>
      </div>
    );
}}