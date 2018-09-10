import React from 'react'
import TopNavbar from '../../components/navbar/TopNavbar';
import SuspendBar from '../../components/suspendBar/SuspendBar';
import ajaxhost from '../../ajaxhost';
import SubCards from '../../components/subPageCard/SubCards';

class Anli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:"https://sh.daoxila.com/HunQing/Shop/AnLi",
      // 筛选的条目
      clearfixs: {
        "yusuan": [
          {
            "href": "https://sh.daoxila.com/HunQing/Shop/AnLi/",
            "text": "\u5168\u90e8",
            "cur": 1
          },
        ],
        "fengge": [
          {
            "href": "https://sh.daoxila.com/HunQing/Shop/AnLi/",
            "text": "\u5168\u90e8",
            "cur": 1
          },

        ],
        "zhuti": [
          {
            "href": "https://sh.daoxila.com/HunQing/Shop/AnLi/",
            "text": "\u5168\u90e8",
            "cur": 1
          },

        ],
        "quyu": [
          {
            "href": "https://sh.daoxila.com/HunQing/Shop/AnLi/",
            "text": "\u5168\u90e8",
            "cur": 1
          },

        ]
      },
      // 当前页显示的数据
      datas: [],
      // 页数的相关信息
      pages: {
        "total": "\u5171\u627e\u5230982\u6761",
        "pre": "",
        "next": "https://sh.daoxila.com/HunQing/Shop/AnLi/Page-2",
        "list": [
          {
            "num": "1",
            "href": "https://sh.daoxila.com/HunQing/Shop/AnLi"
          }
        ]
      }
    }
  }

  componentDidMount() {
    let url = encodeURIComponent(this.state.url).replace(new RegExp("%", "g"), '~');
    let that = this;
    fetch(ajaxhost +'/search/hunlicehua/'+ url, {
      method: 'GET'
    }).then((res) => {
      if (res.ok) {
        res.json().then(function (result) {
          console.log(result);
          that.setState({
            clearfixs:result.clearfixs,
            datas:result.datas,
            pages:result.pages
          })
        })
      }
    }).catch((res) => {
      console.log(res);
    })
  }
  render() {
    const {datas} = this.state;
    return (
      <div>
       <TopNavbar/>
       <SuspendBar/>
       <SubCards datas={datas}/>
      </div>
    );
  }
}

export default Anli;