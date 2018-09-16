import React from 'react';
import "./filter.css"
class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.title,
      datas:this.props.datas,
      active:new Array(this.props.datas.length).fill(0)
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
  handleFilter(index){
    // if(this.props.filter!==undefined){
    //   this.props.filter();
    console.log("--")
      let {active} = this.state;
      active.fill(0);
      active[index] = 1;
      this.setState({
        active:active
      })
    // }
  }
   render(){
     const {title,datas,active} = this.state;
    return(
      <div className="filter-area">
        <ul>
          <li>{title}</li>
          {
            datas.map((item,index) => (
              <li key={index} onClick={() => this.handleFilter(index)} className={[item['cur'] == '1' ? 'active' : '',active[index]?'active':''].join(' ')}>{item["text"]}</li>
            ))
          }
        </ul>
      </div>
    );
}}
export default Filter;