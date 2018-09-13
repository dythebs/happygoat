import React from 'react'
import ajaxhost from '../../ajaxhost';
import SuspendBar from '../../components/suspendBar/SuspendBar';
import JiudianCard from '../../components/subPageCard/JiudianCard';
import Footer_ from '../../components/footer/Footer_';
import {Pagination} from 'antd'
import TopNavbar from '../../components/navbar/TopNavbar';

const loc = "sh";
const debug = true;
const urlSample = "https://" + loc + ".daoxila.com/HunShaSheYing/PinPai";
// Page-1"

// http://localhost:8080/search/hunshasheying/{url}
// http://localhost:8080/search/hunshasheying/https~3A~2F~2Fchangsha.daoxila.com~2FHunShaSheYing~2FPinPai~2FFuRong-Less4999~2FPage-2
const suffix = "/Page-";
class Sheying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page:'1',
      clearfixs: {
        "jiage": [
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/",
            "text": "\u4e0d\u9650",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999",
            "text": "4999\u4ee5\u4e0b",
            "cur": 1
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/5000to7999",
            "text": "5000-7999",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/8000to12999",
            "text": "8000-12999",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/More13000",
            "text": "13000\u4ee5\u4e0a",
            "cur": 0
          }
        ],
        "quyu": [
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999",
            "text": "\u4e0d\u9650",
            "cur": 1
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/FuRong-Less4999",
            "text": "\u8299\u84c9\u533a",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/YuHua-Less4999",
            "text": "\u96e8\u82b1\u533a",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/KaiXin-Less4999",
            "text": "\u5929\u5fc3\u533a",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/YueLu-Less4999",
            "text": "\u5cb3\u9e93\u533a",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/ChangSha-Less4999",
            "text": "\u957f\u6c99\u53bf",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/LiuYang-Less4999",
            "text": "\u6d4f\u9633\u5e02",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/KaiFu-Less4999",
            "text": "\u5f00\u798f\u533a",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/XinShaJingJi-Less4999",
            "text": "\u661f\u6c99\u7ecf\u6d4e\u5f00\u53d1\u533a",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/NingXiang-Less4999",
            "text": "\u5b81\u4e61\u53bf",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/WangCheng-Less4999",
            "text": "\u671b\u57ce\u533a",
            "cur": 0
          }
        ],
        "fengge": [
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999",
            "text": "\u4e0d\u9650",
            "cur": 1
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999-HanShi",
            "text": "\u97e9\u5f0f",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999-OuShi",
            "text": "\u6b27\u5f0f",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999-GeXing",
            "text": "\u4e2a\u6027",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999-ZhongShi",
            "text": "\u4e2d\u5f0f",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999-LvPai",
            "text": "\u65c5\u62cd",
            "cur": 0
          },
          {
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999-WeiDianYing",
            "text": "\u5fae\u7535\u5f71",
            "cur": 0
          }
        ]
      },
      datas: [
        {
          "title": "\u4e3d\u62cd\u6620\u50cf\u5a5a\u7eb1\u6444\u5f71\u673a\u6784",
          "tags": [
          ],
          "zone": "\u6d4f\u9633\u5e02 \u91d1\u6c99\u5317\u8def695\u53f72-3\u697c",
          "cast": "\uffe52519-\uffe59099",
          "taoxi": "5",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150123165354725.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/LiPaiYingXiang-Info"
        },
        {
          "title": "\u897f\u5b50\u5f71\u827a",
          "tags": [
            "\u8bda\u631a\u6c9f\u901a",
            "\u4e13\u4e1a\u6280\u672f",
            "\u5fc3\u7075\u4f53\u9a8c"
          ],
          "zone": "\u8299\u84c9\u533a \u4e94\u4e00\u5e7f\u573a\u65b0\u4e16\u754c\u767e\u8d272402",
          "cast": "\uffe53999-\uffe59999",
          "taoxi": "6",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150123163123664.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/XiZiYingYi-Info"
        },
        {
          "title": "\u661f\u9510\u5916\u666f\u6444\u5f71",
          "tags": [
          ],
          "zone": "\u5929\u5fc3\u533a \u4eba\u6c11\u897f\u8def48\u53f7",
          "cast": "\uffe54899-\uffe54899",
          "taoxi": "1",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150123155158525.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/XingRuiWaiJing-Info"
        },
        {
          "title": "\u6469\u767b\u65b0\u5a18\u5a5a\u7eb1\u6444\u5f71",
          "tags": [
          ],
          "zone": "\u8299\u84c9\u533a \u8521\u9537\u4e2d\u8def184\u53f7",
          "cast": "\uffe52999-\uffe56899",
          "taoxi": "7",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150123141224104.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/MoDengXinNiang-Info"
        },
        {
          "title": "\u827e\u8c1b\u5a5a\u7eb1\u6444\u5f71",
          "tags": [
          ],
          "zone": "\u96e8\u82b1\u533a \u97f6\u5c71\u4e2d\u8def172\u53f7\u548c\u60a6\u9152\u5e972\u5c42",
          "cast": "\uffe53688-\uffe59999",
          "taoxi": "5",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150123115150903.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/AiDiHunShaSheYing-Info"
        },
        {
          "title": "\u8513\u59ae\u65b0\u5a18\u5a5a\u7eb1\u6444\u5f71",
          "tags": [
          ],
          "zone": "\u96e8\u82b1\u533a \u6e58\u5e9c\u4e1c\u8def\u534e\u6da6\u4e07\u5bb6\u8d85\u5e02\u4e8c\u697c",
          "cast": "\uffe53999-\uffe58999",
          "taoxi": "2",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150123113702689.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/ManNiXinNiang-Info"
        },
        {
          "title": "\u7f57\u95e8\u5a5a\u7eb1\u6444\u5f71",
          "tags": [
          ],
          "zone": "\u96e8\u82b1\u533a \u97f6\u5c71\u5317\u8def259\u53f7\u9e3f\u94ed\u4e2d\u5fc3\u53e3(\u8fd1\u9e3f\u94ed\u4e2d\u5fc3)",
          "cast": "\uffe53599-\uffe515999",
          "taoxi": "7",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150123104952109.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/LuoMenHunSha-Info"
        },
        {
          "title": "\u661f\u6c99\u4e91\u89c6\u89c9\u5a5a\u7eb1\u6444\u5f71",
          "tags": [
          ],
          "zone": "\u957f\u6c99\u53bf \u661f\u6c99\u677f\u4ed3\u4e2d\u8def233\u53f7\u6676\u534e\u7f8e\u5730C\u680b7\u697c(\u8fd1\u901a\u7a0b\u5546\u4e1a\u5e7f\u573a)",
          "cast": "\uffe51999-\uffe59599",
          "taoxi": "8",
          "anli": "2",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150122155201881.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/XingShaYunShiJue-Info"
        },
        {
          "title": "\u65b0\u67f3\u89c6\u89c9\u6444\u5f71\u5de5\u4f5c\u5ba4",
          "tags": [
          ],
          "zone": "\u8299\u84c9\u533a \u5efa\u6e58\u8def479\u53f7\u66fc\u54c8\u987f\u5927\u53a62204\u5ba4\u623f",
          "cast": "\uffe52888-\uffe52888",
          "taoxi": "1",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150122144923903.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/XinLiuShiJueSheYing-Info"
        },
        {
          "title": "\u53e4\u6444\u5f71\u5a5a\u7eb1",
          "tags": [
          ],
          "zone": "\u5929\u5fc3\u533a \u9ec4\u5174\u8def\u6b65\u884c\u8857\u5185\u8857\u5317\u6bb5E\u533a5\u697c(\u8fd1\u4e2d\u5fc3\u5e7f\u573a)",
          "cast": "\uffe52888-\uffe52888",
          "taoxi": "1",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150122142931660.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/GuSheYingHunSha-Info"
        },
        {
          "title": "\u8587\u8587\u65b0\u5a18",
          "tags": [
          ],
          "zone": "\u957f\u6c99\u53bf \u5929\u534e\u4e2d\u8def\u51c9\u5858\u8def\u53e350\u53f7\u5174\u4e1a\u94f6\u884c\u5bf9\u9762",
          "cast": "\uffe53699-\uffe54999",
          "taoxi": "3",
          "anli": "1",
          "img": "https://iq.dxlfile.com/mall/original/2015-01/20150121172512953.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/ChangShaWeiWeiXinNiang-Info"
        },
        {
          "title": "\u4e16\u7eaa\u65b0\u5a18\u5a5a\u7eb1\u6444\u5f71",
          "tags": [
            "\u7cbe\u6e5b\u6444\u5f71",
            "\u4e13\u4e1a\u6280\u672f",
            "\u552f\u7f8e\u98ce\u683c"
          ],
          "zone": "\u8299\u84c9\u533a \u8521\u9537\u4e2d\u8def231\u53f7",
          "cast": "\uffe53299-\uffe55299",
          "taoxi": "3",
          "anli": "2",
          "img": "https://iq.dxlfile.com/mall/original/2015-06/20150630111932143.jpg-w216h162",
          "href": "https://changsha.daoxila.com/HunShaSheYing/ChangShaShiJiXinNiang-Info"
        }
      ],
      pages: {
        "total": "\u5171\u627e\u523027\u6761",
        "pre": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999",
        "next": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999/Page-3",
        "list": [
          {
            "num": "1",
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999"
          },
          {
            "num": "2",
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999/Page-2"
          },
          {
            "num": "3",
            "href": "https://changsha.daoxila.com/HunShaSheYing/PinPai/Less4999/Page-3"
          }
        ]
      }
    }
  }

  componentDidMount() {
    const {page} = this.state;
    let url_ = "";
    if (page === '1') {
      url_ = urlSample;
    } else {
      url_ = urlSample + suffix + page;
    }
    let url = encodeURIComponent(url_).replace(new RegExp("%", "g"), '~');
    let that = this;
    // console.log(url.split('-'));
    fetch(ajaxhost + '/search/hunshasheying/' + url, {
      method: 'GET'
    }).then((res) => {
      if (res.ok) {
        res.json().then(function (result) {
          debug && console.log(result);
          that.setState({
            datas: result.datas,
            pages: result.pages,
            loading: true
          })
        })
      }
    }).catch((res) => {
      console.log(res);
    })
  }

  changePage(page) {
    this.setState({
      loading: false
    })
    let url_ = "";
    if (page === '1') {
      url_ = urlSample;
    } else {
      url_ = urlSample + suffix + page;
    }
    let url = encodeURIComponent(url_).replace(new RegExp("%", "g"), '~');
    let that = this;
    // console.log(url.split('-'));
    fetch(ajaxhost + '/search/hunshasheying/' + url, {
      method: 'GET'
    }).then((res) => {
      if (res.ok) {
        res.json().then(function (result) {
          debug && console.log(result);
          that.setState({
            datas: result.datas,
            pages: result.pages,
            loading: true
          })
        })
      }
    }).catch((res) => {
      console.log(res);
    })
  }
  render() {

    const { datas, pages, loading } = this.state;
    const current = parseInt(this.props.match.params.page);
    const total = parseInt(pages.list[pages.list.length - 1].num);
    return (
      loading &&
      <div>
        <TopNavbar />
        <SuspendBar />
        <JiudianCard datas={datas} />
        {/* {loading}?<JiudianCard datas={datas} />:<Loading /> */}
        <div className="pagination-custom" >
          <Pagination defaultCurrent={current} total={total} onChange={this.changePage} />
        </div>
        <Footer_ />
      </div>
    );
  }
}

export default Sheying;