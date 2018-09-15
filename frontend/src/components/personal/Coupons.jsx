import React from 'react'
import Coupon from '../coupon/Coupon';
import './personalC.css'

class Coupons extends React.Component {
   render(){
    return(
      <div className='p-coupons'>
        <h1 className='title'>优惠券</h1>
        <Coupon/>
      </div>
    );
}}

export default Coupons;