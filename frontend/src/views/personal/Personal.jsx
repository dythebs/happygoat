import React from 'react';
import './personal.css';
import { Icon , message} from "antd";
import CartDetail from '../../components/cart/CartDetail';
import TopNavbar from '../../components/navbar/TopNavbar';
import Info from '../../components/personal/Info';
import Coupons from '../../components/personal/Coupons';
import Order from '../../components/personal/Order';
import Todo from '../../components/personal/Todo';
import Jiri from '../../components/personal/Jiri';
import Guji from '../../components/personal/Guji';
import SuspendBar from '../../components/suspendBar/SuspendBar';
import { connect } from "react-redux";
import Story from '../../components/storyTeller/Story';

const components_ = [
    <Info />,
    <CartDetail />,
    <Coupons />,
    <Todo />,
    <Order />,
    <Jiri />,
    <Guji />,
    <Story />
]

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            token:this.props.token
        }
        this.changeContent = this.changeContent.bind(this);
    }

    changeContent(i) {
        if(this.state.token !== undefined && this.state.token !== ''){
            this.setState({
                index: i - 1
            })
        } else if(i === 2 || i=== 4){
            this.setState({
                index: i - 1
            })
        } else {
            message.warning('请先登录')
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props){
            this.setState({
                token:nextProps.token
            })
        }
    }

    componentDidMount() {
        let index = this.props.match.params.index;
        if (index !== '' && index !== undefined) {
            this.setState({
                index: index
            })
        }
    }
    render() {
        const { index } = this.state;
        return (
            <div className='-center container'>
                <TopNavbar />
                <SuspendBar/>
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
                                    <Icon type="star" theme="outlined" />
                                    <span>收藏夹</span>
                                </div>
                            </li>
                            <li className={index === 2 ? 'active' : ''} onClick={() => this.changeContent(3)}>
                                <div className="nav-item">
                                    <Icon type="credit-card" theme="outlined" />
                                    <span>我的卡券</span>
                                </div>
                            </li>
                            <li className={index === 3 ? 'active' : ''} onClick={() => this.changeContent(4)}>
                                <div className="nav-item">
                                    <Icon type="check-square" theme="outlined" />
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
                            <li className={index === 7 ? 'active' : ''} onClick={() => this.changeContent(8)}>
                                <div className="nav-item">
                                    <Icon type="book" theme="outlined" />
                                    <span>我的祝福</span>
                                </div>
                            </li>
                        </ul>
                    </aside>

                    <main id="main">
                        {/* <div id="blackout-on-hover"></div> */}
                        {/* <a href='/qingtie/qingtie.html/'></a> */}
                        {
                            components_[index]
                        }
                    </main>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(Personal);