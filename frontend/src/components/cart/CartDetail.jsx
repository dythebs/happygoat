import React from 'react'
import './cartDetail.css'
import { connect } from "react-redux";
import * as Actions from "../../action/ActionType"
import ajaxhost from '../../ajaxhost';
class CartDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cartData
    }
    console.log('cartData', this.props.data);
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps ){
      this.setState({
        data:nextProps.cartData
      })
    }
  }
  render() {
    const { data } = this.state;
    let dataHtml = '';
    console.log(data,"shoucangjia");
    if (data === undefined || JSON.stringify(data) === '[]' ) {
      dataHtml = <p style={{textAlign:'center'}}>你的收藏夹空空如也</p>
    } else {
      dataHtml = data.map((item, index) => (
        <li className="items">

          <div className="infoWrap">
            <div key={index} className="cartSection">
              <img src={item.img} alt="" className="itemImg" />
              <p className="itemNumber">
                <a className='detail' target='_blank' href={ajaxhost + item.href}>{item.title}</a>
              </p>
              <h3>{item.detail}</h3>
              <div className="prodTotal cartSection">
                <p>{item.price}</p>
              </div>
            </div>

            <div className="cartSection removeWrap" onClick={() => this.props.delproduct(item.title)}>
              <a href="#" className="remove">x</a>
            </div>
          </div>
        </li>
      ))
    }
    return (
      <div className='cart-detail'>
        <div className="wrap cf">
          <h1 className="projTitle">收藏夹</h1>
          <div className="cart">
            <ul className="cartWrap">
              {dataHtml}
              {/* <li className="items even">

                <div className="infoWrap">
                  <div className="cartSection">

                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className="itemImg" />
                    <p className="itemNumber">#QUE-007544-002</p>
                    <h3>Item Name 1</h3>

                    {/* <p> <input type="text" className="qty" placeholder="3" /> x $5.00</p>

                    <p className="stockStatus"> In Stock</p>
                  </div>


                  <div className="prodTotal cartSection">
                    <p>$15.00</p>
                  </div>
                  <div className="cartSection removeWrap">
                    <a href="#" className="remove">x</a>
                  </div>
                </div>
              </li> */}
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