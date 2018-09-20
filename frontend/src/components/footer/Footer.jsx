import React from 'react';
import "./footer.css"

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scrollToBottom: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(event) {
    // let screenTopE = event.srcElement.body.scrollTop;
    const screenTopE = window.pageYOffset ||
      document.documentElement.scrollTop
    // alert(screenTop)
    if (screenTopE > 80) {
      // console.log(screenTopE);
      this.setState({
        scrollToBottom: true
      })
    }
    else if (screenTopE < 10) {
      // console.log(screenTopE);
      this.setState({
        scrollToBottom: false
      })
    }
  }

   render(){
     const {scrollToBottom} = this.state;
    return(
      <footer className={scrollToBottom?"topper":""}>
        <div className='col'>
          {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
          <img src='/images/footer1.png' />
          <div className='colheader'>精选服务给您十分满意</div>
        </div>
        <div className='col'>
          {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
          <img src='/images/footer2.png' />
          <div className='colheader'>实时咨询给您十分贴心</div>
        </div>
        <div className='col'>
          {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
          <img src='/images/footer3.png' />
          <div className='colheader'>结婚工具让您的婚礼完美唯一</div>
        </div>
        {/* <div className='col'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <div className='colheader'>喜羊羊婚庆网站</div>
        </div> */}
      </footer>
    );
}}

export default Footer;