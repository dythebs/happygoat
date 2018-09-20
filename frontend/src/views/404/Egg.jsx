import React from 'react'
import Loading from '../../components/loading/Loading';

class Egg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showloading:false
    }
  }

  toHome = () => {

    this.setState({
      showloading:true
    })

    setTimeout(() => {
      this.props.history.push('/home')
    }, 500)
  }


  render(){
    const {showloading} = this.state;
    let style = {
      cursor: 'pointer',
      width:'58%',
      margin:'8em auto 0',
      display:'block',
      borderRadius:'10px',
      transition:'all .2 .3 ease-in-out',
    }
    if(showloading){
      return <Loading/>
    } else {
      return (
        <div onClick={this.toHome}>
          <img src='/images/404.png' style={style} />
        </div>
      );
    }
}}

export default Egg;