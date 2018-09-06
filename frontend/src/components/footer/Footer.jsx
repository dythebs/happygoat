import React from 'react';
import "./footer.css"

class Footer extends React.Component {
   render(){
    return(
      <footer>
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