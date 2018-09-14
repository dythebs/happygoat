import React from 'react'
import './cartDetail.css'

class CartDetail extends React.Component {
  render() {
    return (
      <div className='cart-detail'>
        <div className="wrap cf">
          <h1 className="projTitle">收藏夹</h1>
          <div className="cart">
            <ul className="cartWrap">
              <li className="items odd">

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

export default CartDetail;