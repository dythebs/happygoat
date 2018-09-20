import * as React from 'react'
import { Cascader } from 'antd';
import { connect } from "react-redux";
import * as Actions from "../../action/ActionType"

const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
  }],
}, {
  value: 'hunan',
  label: '湖南',
  children: [{
    value: 'changsha',
    label: '长沙',
  }],
},{
  value: 'sh',
  label: '上海',
}];

class CitySwitcher extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     text:this.props.loc
   }
   console.log(this.props.loc);
 }

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),

    })

    this.props.setloc(selectedOptions.map(o => o.label).join(', '))
    // setTimeout(() => {
    //   this.props.hide()
    // }, 500);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
      this.setState({
        loc:nextProps.loc
      })
    }
  }
  render() {

    return (
      <span className='switcher'>
        <p>{this.state.text}</p>
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="#">选择城市</a>
        </Cascader>
      </span>
    );
  }
}
const mapStateToProps = state => ({
  loc: state.loc
})
const mapDispatchToProps = dispatch => ({
  setloc: loc => dispatch(Actions.setLoc(loc))
})
export default connect(mapStateToProps, mapDispatchToProps)(CitySwitcher);