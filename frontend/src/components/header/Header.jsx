import React from 'react'
import "./header.css"
class Header extends React.Component {
   render(){
    return(
      <div className="header">
        <div id='title'>Hidden Header And Footer</div>
        <h4 className='title'>- tyler fowle -</h4>
      </div>
    );
}}

export default Header;