import React from 'react'

class Egg extends React.Component {

  toHome = () => {
    this.props.history.push('/home')
  }


  render(){
    let style = {
      cursor: 'pointer',
      width:'500px',
      margin:'6em auto',
      display:'flex',
      borderRadius:'10px'
    }
    return(
      <div onClick = {this.toHome}>
        <img src='/images/404.png' style={style}/>
      </div>
    );
}}

export default Egg;