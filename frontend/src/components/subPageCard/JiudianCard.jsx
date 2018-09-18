import React from 'react'
import "./jiudian.css"
import { Icon, message } from "antd";
import { connect } from 'react-redux'
import * as Actions from "../../action/ActionType"
// import {addToCart,getCartItems, clearCart} from '../../utils/cartOperation';
class JiudianCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas,
      type: this.props.type
    }
    // this.state = {
    //   datas: [
    //     {
    //       "title": "\u8001\u6d0b\u623f",
    //       "img": "https://iq.dxlfile.com/hotel/original/2012-09/20120918150552.jpg-w430h325",
    //       "cast": "\uffe5 4880-9980",
    //       "opinions": [
    //         "\u7279\u8272\u9910\u5385",
    //         "23\u684c",
    //         "\u5362\u6e7e\u533a"
    //       ],
    //       "rooms":
    //         [
    //           {
    //             "name": "1\u5385",
    //             "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101057266.jpg-w200h150"
    //           },
    //           {
    //             "name": "\u5305\u573a",
    //             "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101196220.jpg-w200h150"
    //           }
    //         ]
    //     },
    //     {
    //       "title": "\u8001\u6d0b\u623f",
    //       "img": "https://iq.dxlfile.com/hotel/original/2012-09/20120918150552.jpg-w430h325",
    //       "cast": "\uffe5 4880-9980",
    //       "opinions": [
    //         "\u7279\u8272\u9910\u5385",
    //         "23\u684c",
    //         "\u5362\u6e7e\u533a"
    //       ],
    //       "rooms":
    //         [
    //           {
    //             "name": "1\u5385",
    //             "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101057266.jpg-w200h150"
    //           },
    //           {
    //             "name": "\u5305\u573a",
    //             "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101196220.jpg-w200h150"
    //           }
    //         ]
    //     }
    // ]
    // }

    this.addJiudianToCart = this.addJiudianToCart.bind(this);
    this.addSheyingToCart = this.addSheyingToCart.bind(this);
  }

  addJiudianToCart(index) {

    const { datas } = this.state;
    let select = datas[index];
    select.detail = select.cast + " " + select.opinions.join(" ");
    console.log(select);
    console.log(this.props);
    message.info("已添加");
    // const {dispatch} = this.props;
    // console.log(getCartItems());
    // console.log();
    // console.log("hu",index);
    // addToCart(select);
    // message.info('已添加');
    // dispatch(Actions.addproduct(select));
    this.props.addproduct(select)

  }

  addSheyingToCart(index){
    const { datas } = this.state;
    let select = datas[index];
    select.detail = select.cast + " " + select.tags.join(' ');
    message.info('已添加');
    this.props.addproduct(select);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.datas !== this.props.datas) {
      this.setState({
        datas: nextProps.datas
      })
    }
  }
  render() {
    const { datas, type } = this.state;
    if (type === 'jiudian') {
      return (
        <div className="j-container">
          {
            datas.map((item, index) => (
              <div key={index} className="j-column">
                {/* {
              console.log('index',index)
            } */}
                <div className="blog-card">
                  <img src={item["img"]} className="post-image" />
                  <div className="article-details">
                    <h3 className="post-title">{item['title']}</h3>
                    <h3 className="j-cast">{item['cast']}</h3>
                    <div className="post-description j-room">
                      {
                        item['rooms'].map((room, j) => (
                          <div className="room" key={j}>
                            <img src={room['img']} />
                            <p>{room['name']}</p>
                          </div>
                        ))
                      }
                    </div>
                    <p className="post-author">
                      {
                        item['opinions'].map((opinion, i) => (
                          <span key={i}>{opinion}</span>
                        ))
                      }
                      <span className="star"><Icon type="star" theme="outlined" onClick={() => this.addJiudianToCart(index)} /></span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div >
      )
    } else if (type === 'sheying'){
      return (
        <div className="j-container">
          {
            datas.map((item, index) => (
              <div key={index} className="j-column sheying-img">
                <div className="blog-card">
                  <img src={item["img"]} className="post-image" />
                  <h3 className="post-title">{item['title']}</h3>

                  <div className="article-details">
                    <h3 className="j-cast">{item['cast']}</h3>
                    <div className="post-description j-room">
                      <p>{item['zone']}</p>
                      <p>套系：{item['taoxi']}</p>
                      <p>案例：{item['anli']}</p>
                      <br/>
                      <a href={item['href']}></a>
                    </div>
                    <p className="post-author">
                      {
                        item['tags'].map((opinion, i) => (
                          <span key={i}>{opinion}</span>
                        ))
                      }
                      <span className="star"><Icon type="star" theme="outlined" onClick={() => this.addSheyingToCart(index)} /></span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div >
      )
    }
    else {
      return null
    }
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  }
}
const mapDispatchToProps = dispatch => ({
  addproduct: item => dispatch(Actions.addproduct(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(JiudianCard);