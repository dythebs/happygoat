import React from 'react'

class JiriBadge extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text : this.props.type === 'error' ? "结":"订"
    }
  }
   render(){
     const {type} = this.props;
    // error 结婚 success 订婚
    return(
      <div className={['badge',type ==='error'?'jiehun':'dinghun'].join(' ')}>
        <p>{this.state.text}</p>
      </div>
    );
}}

export default JiriBadge