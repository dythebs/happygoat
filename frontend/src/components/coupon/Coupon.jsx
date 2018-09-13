import React from 'react'
import './coupon.css'
class Coupon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // data:this.props.data
      data:[
        {
          title:'XX造型优惠券',
          limit:'满任意金额使用',
          code:'87788',
          time:[
            '2018-09-20',
            '2019-09-20'
          ]
        }
      ]
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props!==nextProps) {
      this.setState({
        data:nextProps.data
      })
    }
  }
   render(){
     const {data} = this.state;
    return(
      <div className='coupons'>
        {
          data.map((item,index) => (
            <div key={index} className='coupon'>
              <div className='coupon-intro'>
                <h4>{item.title}</h4>
                <ul>
                  <li>{item.limit}</li>
                  <li>到店输入{item.code}使用</li>
                  <li>限{item.time[0]}到{item.time[1]}使用</li>
                </ul>
              </div>
              <div className='coupon-value'>
                ￥{item.cast}
              </div>
            </div>
          ))
        }
      </div>
    );
}}

export default Coupon;