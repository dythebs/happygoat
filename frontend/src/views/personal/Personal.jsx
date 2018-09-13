import React from 'react'
import './personal.css'
import { Icon } from "antd";
import CartDetail from '../../components/cart/CartDetail';
import TopNavbar from '../../components/navbar/TopNavbar';

class Personal extends React.Component {
   render(){
    return(
      <div>
        <TopNavbar/>
        <div class='global-wrapper' ng-controller="ctrl">
          <aside>
            <h1>a</h1>

            <ul>
              <li class="active">
                <div class="nav-item">
                  <i class="material-icons">photo_library</i>
                  <span>View More</span>
                </div>
              </li>
              <li>
                <div class="nav-item">
                  {/* <i class="material-icons">local_atm</i> */}
                  <Icon type="credit-card" theme="outlined" />
                  <span>Transactions</span>
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div class="nav-item">
                  {/* <i class="material-icons">settings</i> */}
                  <Icon type="setting" className='material-icons' theme="outlined" />
                  <span>settings</span>
                </div>
              </li>
              <li>
                <div class="nav-item">
                  {/* <i class="material-icons">launch</i> */}
                  <span>launch</span>
                </div>
              </li>
              <li>
                <div class="nav-item">
                  {/* <i class="material-icons">info_outline</i> */}
                  <span>learn more</span>
                </div>
              </li>
            </ul>
          </aside>

          <main id="main">
            <div id="blackout-on-hover"></div>
            <header>
              <nav>Help ?</nav>
              <h2>View More</h2>
            </header>
            <CartDetail />
            {/* <section id="card-view">

            <article>
              <div class="card-image"></div>
              <div class="card-text">
                <h3>Cool Card</h3>
                <p>more cool text area for this cool card</p>
              </div>
              <button>Cool Button</button>
            </article>

            <article>
              <div class="card-image"></div>
              <div class="card-text">
                <h3>Cool Card</h3>
                <p>more cool text area for this cool card</p>
              </div>
              <button>Cool Button</button>
            </article>
            <article>
              <div class="card-image"></div>
              <div class="card-text">
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