import * as React from 'react'
import "./topbar.css"
import { Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as Actions from "../../action/ActionType"
class TopNavbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      scrollFixed: false,
      type: this.props.type,
      token: this.props.token
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.changeCollapseState = this.changeCollapseState.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        token: nextProps.token
      })
    }
  }
  handleScroll(event) {
    // let screenTopE = event.srcElement.body.scrollTop;
    const screenTopE = window.pageYOffset ||
      document.documentElement.scrollTop
    // alert(screenTop)
    if (screenTopE > 100) {
      // console.log(screenTopE);
      this.setState({
        scrollFixed: true
      })
    }
    else if (screenTopE < 10) {
      console.log(screenTopE);
      this.setState({
        scrollFixed: false
      })
    }
  }
  changeCollapseState() {
    const targetEl = this.state.collapse;
    this.setState({
      collapse: !targetEl
    })
  }
  render() {
    const { collapse, scrollFixed, type, token } = this.state;
    let login = '';
    console.log(token);
    if ( token !== undefined && token !== '' ) {
      login = <NavLink to="/Center" className={["item -link", type ? '-home' : ''].join(' ')}>个人中心</NavLink>
    } else {
      login = <NavLink to="/Sign" className={["item -link", type ? '-home' : ''].join(' ')}>登录/注册</NavLink>
    }

    return (
      <div>
        <div className={["navbar-component", scrollFixed ? "scrolled" : ""].join(" ")}>
          <div className="navbar area">
            <a href="#" className="brand"><img src='/images/logo.png' /></a>

            <nav role="navigation" id="navigation" className={["list", collapse ? "-on" : ""].join(" ")}>
              {/* <a href="#" className="item -link">Home</a>  */}
              <NavLink to="/home" className={["item -link", type ? '-home' : ''].join(' ')}>主页</NavLink>
              <NavLink to="/AnLi/1" className={["item -link", type ? '-home' : ''].join(' ')}>案例推荐</NavLink>
              <NavLink to="/Sheying/1" className={["item -link", type ? '-home' : ''].join(' ')}>婚纱摄影</NavLink>
              <NavLink to="/miyue" className={["item -link", type ? '-home' : ''].join(' ')}>蜜月游</NavLink>
              <NavLink to="/Jiudian/1" className={["item -link", type ? '-home' : ''].join(' ')}>酒店推荐</NavLink>
              {/* <NavLink to="/Center" className={["item -link", type ? '-home' : ''].join(' ')}>个人中心</NavLink> */}
              {login}
              <span className="item"><Icon type="environment" theme="outlined" className={type ? '-home' : ''} style={{ fontSize: '20px' }} /></span>
            </nav>

            <button data-collapse={collapse} onClick={this.changeCollapseState} data-target="#navigation" className={["toggle", collapse ? "-active" : ""].join(" ")}>
              <span className="icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(TopNavbar);