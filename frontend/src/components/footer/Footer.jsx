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
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <div className='colheader'>Column 1</div>
        </div>
        <div className='col'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <div className='colheader'>Column 2</div>
        </div>
        <div className='col'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <div className='colheader'>Column 3</div>
        </div>
        <div className='col'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <div className='colheader'>Column 4</div>
        </div>
      </footer>
    );
}}

export default Footer;