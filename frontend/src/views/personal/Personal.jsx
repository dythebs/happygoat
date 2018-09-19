import React from 'react'
import './personal.css'
import {Icon} from "antd";
import CartDetail from '../../components/cart/CartDetail';
import TopNavbar from '../../components/navbar/TopNavbar';
import Info from '../../components/personal/Info';
import Coupons from '../../components/personal/Coupons';
import Order from '../../components/personal/Order';
import Todo from '../../components/personal/Todo';
import Jiri from '../../components/personal/Jiri';
import Guji from '../../components/personal/Guji';

const components_ = [
    <Info/>,
    <CartDetail/>,
    <Coupons/>,
    <Todo/>,
    <Order/>,
    <Jiri/>,
    <Guji/>
]

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.changeContent = this.changeContent.bind(this);
    }

    changeContent(i) {
        this.setState({
            index: i - 1
        })
    }
//     function
 createMarkup() {
    return { __html: 'First &middot; Second' };
}

// function MyComponent() {
//     return <div dangerouslySetInnerHTML={createMarkup()} />;
// }
    // rmrf = ()=>{
    //     document.getElementById('body').innerHTML = <Cen dangerouslySetInnerHTML={this.createMarkup()}></C>
    // }

    render() {
        const {index} = this.state;
        return (
            <div className='-center container'>
                <TopNavbar/>
                <div className='content global-wrapper' ng-controller="ctrl">
                    <aside>
                        <ul>
                            {/* <li><button onClick={this.rmrf}></button></li> */}
                            <li className={index === 0 ? 'active' : ''} onClick={() => this.changeContent(1)}>
                            {/* <h1></h1> */}
                                <div className="nav-item">
                                    <Icon type="user" theme="outlined" />
                                    <span>个人信息</span>
                                </div>
                            </li>
                            <li className={index === 1 ? 'active' : ''} onClick={() => this.changeContent(2)}>
                                <div className="nav-item">
                                    <Icon type="star" theme="outlined"/>
                                    <span>收藏夹</span>
                                </div>
                            </li>
                            <li className={index === 2 ? 'active' : ''} onClick={() => this.changeContent(3)}>
                                <div className="nav-item">
                                    <Icon type="credit-card" theme="outlined"/>
                                    <span>我的卡券</span>
                                </div>
                            </li>
                            <li className={index === 3 ? 'active' : ''} onClick={() => this.changeContent(4)}>
                                <div className="nav-item">
                                    <Icon type="check-square" theme="outlined"/>
                                    <span>婚礼进度</span>
                                </div>
                            </li>
                            <li className={index === 4 ? 'active' : ''} onClick={() => this.changeContent(5)}>
                                <div className="nav-item">
                                    <Icon type="snippets" theme="outlined" />
                                    <span>我的订单</span>
                                </div>
                            </li>
                            <li className={index === 5 ? 'active' : ''} onClick={() => this.changeContent(6)}>
                                <div className="nav-item">
                                    <Icon type="calendar" theme="outlined" />
                                     <span>吉日查询</span>
                                </div>
                            </li>
                            <li className={index === 6 ? 'active' : ''} onClick={() => this.changeContent(7)}>
                                <div className="nav-item">
                                    <Icon type="pay-circle" theme="outlined" />
                                    <span>预算估计</span>
                                </div>
                            </li>
                        </ul>
                    </aside>

                    <main id="main">
                        {/* <div id="blackout-on-hover"></div> */}
                        <a href='/qingtie/qingtie.html/'></a>
                        {
                            components_[index]
                        }
                    </main>
                </div>
            </div>
        );
    }
}

export default Personal;