import React from 'react';
import "./filter.css"
class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.title,
      datas:this.props.datas
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props) {
      this.setState({
        title:nextProps.title,
        datas:nextProps.datas
      })
      // console.log(nextProps.datas);
    }
  }
   render(){
     const {title,datas} = this.state;
    return(
      <div className="filter-area">
        <ul>
          <li>{title}</li>
          {
            datas.map((item,index) => (
              <li key={index} className={item['cur']=='1'?'active':''}>{item["text"]}</li>
            ))
          }
        </ul>
      </div>
    );
}}
export default Filter;