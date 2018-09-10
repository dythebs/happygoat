import * as React from 'react'
import "./topbar.css"
import {NavLink} from 'react-router-dom'
export default class TopNavbar extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      collapse:false,
      scrollFixed:false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.changeCollapseState = this.changeCollapseState.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
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
     const {collapse,scrollFixed} = this.state;
    return(
      <div>
        <div className={["navbar-component", scrollFixed ? "scrolled" : ""].join(" ")}>
          <div className="navbar area">
            <a href="#" className="brand">LOGO</a>

            <nav role="navigation" id="navigation" className={["list", collapse ? "-on" : ""].join(" ")}>
              {/* <a href="#" className="item -link">Home</a>  */}
              <NavLink to="/home" className="item -link">主页</NavLink>
              <NavLink to="/AnLi/1" className="item -link">案例推荐</NavLink>
              <a href="#" className="item -link">Articles</a>
              <a href="#" className="item -link">Projects</a>
              <a href="#" className="item -link">Resources</a>
              <a href="#" className="item -link">About me</a>
              <span className="item"><i className="fa fa-search" /></span>
            </nav>

            <button data-collapse={collapse} onClick={this.changeCollapseState} data-target="#navigation" className={["toggle", collapse ? "-active" : ""].join(" ")}>
              <span className="icon" />
            </button>
          </div>
        </div>
        {/* <div style={{height:'800px'}}>
          <p>
            sfdhngf
          </p>
          <p>
            sfdhngf
          </p>
          <p>
            sfdhngf
          </p>
          <p>
            sfdhngf
          </p>
          <p>
            sfdhngf
          </p>
          <p>
            sfdhngf
          </p>
        </div> */}
      </div>
    );
}}