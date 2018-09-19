import React from 'react'
import './cartDetail.css'
import { connect } from "react-redux";
import * as Actions from "../../action/ActionType"
class CartDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cartData
    }
    console.log('cartData', this.props.data);
  }
  render() {
    const { data } = this.state;
    let dataHtml = '';
    console.log(data,"shoucangjia");
    if (data === undefined || JSON.stringify(data) === '[]' ) {
      dataHtml = <p>你的收藏夹空空如也</p>
    } else {
      dataHtml = data.map((item, index) => (
        <div key={index} className="cartSection">
          <img src={item.img} alt="" className="itemImg" />
          <p className="itemNumber">{item.title}</p>
          <h3>{item.detail}</h3>
        </div>
      ))
    }
    return (
      <div className='cart-detail'>
        <div className="wrap cf">
          <h1 className="projTitle">收藏夹</h1>
          <div className="cart">
            <ul className="cartWrap">
              <li className="items odd">

                <div className="infoWrap">
                  {dataHtml}
                  {/* <div className="prodTotal cartSection">
                    <p>$15.00</p>
                  </div> */}
                  <div className="cartSection removeWrap">
                    <a href="#" className="remove">x</a>
                  </div>
                </div>
              </li>
              <li className="items even">

                <div className="infoWrap">
                  <div className="cartSection">

                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className="itemImg" />
                    <p className="itemNumber">#QUE-007544-002</p>
                    <h3>Item Name 1</h3>

                    {/* <p> <input type="text" className="qty" placeholder="3" /> x $5.00</p>

                    <p className="stockStatus"> In Stock</p> */}
                  </div>


                  <div className="prodTotal cartSection">
                    <p>$15.00</p>
                  </div>
                  <div className="cartSection removeWrap">
                    <a href="#" className="remove">x</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartData: state.data
})
const mapDispatchToProps = dispatch => ({
  // addproduct: item => dispatch(Actions.addproduct(item))
  delproduct: title => dispatch(Actions.delproduct(title)),
  // clearCart: () => dispatch(Actions.clear_cart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);