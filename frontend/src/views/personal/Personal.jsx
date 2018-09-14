import React from 'react'
import './personal.css'
import { Icon } from "antd";
import CartDetail from '../../components/cart/CartDetail';
import TopNavbar from '../../components/navbar/TopNavbar';
import Info from '../../components/personal/Info';
import Coupons from '../../components/personal/Coupons';
import Order from '../../components/personal/Order';
import Todo from '../../components/personal/Todo';

const components_ = [
  <Info/>,
  <CartDetail/>,
  <Coupons/>,
  <Todo/>,
  <Order/>
]
class Personal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index:0
    }
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent(i){
    this.setState({
      index:i-1
    })
  }
   render(){
     const {index} = this.state;
    return(
      <div className='-center container'>
        <TopNavbar/>
        <div className='global-wrapper content' ng-controller="ctrl">
          <aside>
            <ul>
              <li className={index===0 ?'active':''} onClick={()=>this.changeContent(1)}><h1></h1></li>
              <li className={index=== 1?'active':''} onClick={()=>this.changeContent(2)}>
                <div className="nav-item">
                  <Icon type="star" theme="outlined" />
                  <span>收藏夹</span>
                </div>
              </li>
              <li className={index=== 2?'active':''} onClick={()=>this.changeContent(3)}>
                <div className="nav-item">
                  <Icon type="credit-card" theme="outlined" />
                  <span>我的卡券</span>
                </div>
              </li>
              <li className={index=== 3?'active':''} onClick={()=>this.changeContent(4)}>
                <div className="nav-item">
                  <Icon type="check-square" theme="outlined" />
                  <span>婚礼进度</span>
                </div>
              </li>
              <li className={index=== 4?'active':''} onClick={()=>this.changeContent(5)}>
                <div className="nav-item">
                  {/* <i className="material-icons">launch</i> */}
                  <span>launch</span>
                </div>
              </li>
              <li className={index=== 5?'active':''} onClick={()=>this.changeContent(6)}>
                <div className="nav-item">
                  {/* <i className="material-icons">info_outline</i> */}
                  <span>learn more</span>
                </div>
              </li>
            </ul>
          </aside>

          <main id="main">
             {/* <div id="blackout-on-hover"></div> */}
             {
               components_[index]
             }
           {/* <header>
              <nav>Help ?</nav>
              <h2>View More</h2>
            </header> */}
            {/* <CartDetail /> */}
            {/* <section id="card-view">

            <article>
              <div className="card-image"></div>
              <div className="card-text">
                <h3>Cool Card</h3>
                <p>more cool text area for this cool card</p>
              </div>
              <button>Cool Button</button>
            </article>

            <article>
              <div className="card-image"></div>
              <div className="card-text">
                <h3>Cool Card</h3>
                <p>more cool text area for this cool card</p>
              </div>
              <button>Cool Button</button>
            </article>
            <article>
              <div className="card-image"></div>
              <div className="card-text">
                <h3>Cool Card</h3>
                <p>more cool text area for this cool card</p>
              </div>
              <button>Cool Button</button>
            </article>
          </section> */}

          </main>

        </div>

      </div>
    );
}}

export default Personal;