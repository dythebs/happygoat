import React from 'react'
import "./jiudian.css"
import { Icon } from "antd";
class JiudianCard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   datas:this.props.datas
    // }
    this.state = {
      datas: [
        {
          "title": "\u8001\u6d0b\u623f",
          "img": "https://iq.dxlfile.com/hotel/original/2012-09/20120918150552.jpg-w430h325",
          "cast": "\uffe5 4880-9980",
          "opinions": [
            "\u7279\u8272\u9910\u5385",
            "23\u684c",
            "\u5362\u6e7e\u533a"
          ],
          "rooms":
            [
              {
                "name": "1\u5385",
                "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101057266.jpg-w200h150"
              },
              {
                "name": "\u5305\u573a",
                "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101196220.jpg-w200h150"
              }
            ]
        },
        {
          "title": "\u8001\u6d0b\u623f",
          "img": "https://iq.dxlfile.com/hotel/original/2012-09/20120918150552.jpg-w430h325",
          "cast": "\uffe5 4880-9980",
          "opinions": [
            "\u7279\u8272\u9910\u5385",
            "23\u684c",
            "\u5362\u6e7e\u533a"
          ],
          "rooms":
            [
              {
                "name": "1\u5385",
                "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101057266.jpg-w200h150"
              },
              {
                "name": "\u5305\u573a",
                "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101196220.jpg-w200h150"
              }
            ]
        }
      ]
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        datas: nextProps.datas
      })
    }
  }
  render() {
    const { datas } = this.state;
    return (
      <div className="j-container">
        {
          datas.map((item, index) => (
            <div key={index} className="j-column">
              <div className="blog-card">
                <img src={item["img"]} className="post-image" />
                {/* <div className="mask">
                  <a className="button">加入收藏</a>
                </div> */}
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
                  </p>
                  <span className="star"><Icon type="star" theme="outlined" /></span>
                </div>
              </div>
            </div>
          ))
        }
      </div >)
  }
}

export default JiudianCard;