import React from 'react'
import TopNavbar from '../../components/navbar/TopNavbar';
import SuspendBar from '../../components/suspendBar/SuspendBar';
import ajaxhost from '../../ajaxhost';
import SubCards from '../../components/subPageCard/SubCards';
import {Pagination} from "antd";
import {withRouter, Link} from "react-router-dom";
import "./anli.css"
import Footer_ from '../../components/footer/Footer_';
import Filter from '../../components/filter/Filter';
import Loading from '../../components/loading/Loading';

const loc = 'sh';
const debug = true;
const suffix = "/Page-";
const urlSample = 'https://' + loc + ".daoxila.com/HunQing/Shop/Anli"
class Anli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            url: "https://sh.daoxila.com/HunQing/Shop/AnLi",
            // 筛选的条目
            clearfixs:
                {
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
            pages:
                {
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
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        console.log("mount");
        console.log(this.props.history.location);
        this.loadData();
    }

    loadData() {
        let page = this.props.match.params.page;
        let url_;
        if (page === 1) {
            url_ = this.state.url
        } else {
            url_ = this.state.url + suffix + page
        }

        console.log(encodeURIComponent('https://changsha.daoxila.com/HunQing/Shop/HuangJia-Photo-3803').replace(new RegExp("%", "g"), '~'))
        let url = encodeURIComponent(url_).replace(new RegExp("%", "g"), '~');
        let that = this;
        // console.log(url.split('-'));
        fetch(ajaxhost + '/search/hunlicehua/' + url, {
            method: 'GET'
        }).then((res) => {
            if (res.ok) {
                res.json().then(function (result) {
                    debug && console.log('loading',result);
                    that.setState({
                        clearfixs: result.clearfixs,
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
        // this.setState({

        // })
        // window.location.replace("/AnLi/" + page)
        // console.log(this.props.history);
        // this.setState({
        //   loading:false/
        // })
        // setTimeout(() => {
        //   this.loadData();
        // }, 0);

        let k = "/AnLi/page/" + page.toString();

        this.props.history.push(k);
        // this.loadData();
        // this.props.history.push("/home");
        // https://sh.daoxila.com/HunQing/Shop/AnLi
        // "https://sh.daoxila.com/HunQing/Shop/AnLi/Page-2
        // const pageUrl = this.state.pages.list[0].href.split("/Page-");
        // let url_="";
        // if(page === 1){
        //   url_ = pageUrl[0]
        // }else{
        //   url_ = pageUrl[0] + suffix + page;
        // }

        // let url = encodeURIComponent(url_).replace(new RegExp("%", "g"), '~');
        // debug && console.log(url);
        // let that = this;
        // fetch(ajaxhost + '/search/hunlicehua/' + url, {
        //   method: 'GET'
        // }).then((res) => {
        //   if (res.ok) {
        //     res.json().then(function (result) {
        //       debug && console.log("6",result);
        //       that.setState({
        //         clearfixs: result.clearfixs,
        //         datas: result.datas,
        //         pages: result.pages,
        //         loading:true
        //       },that.forceUpdate())
        //     })
        //   }
        // }).catch((res) => {
        //   console.log(res);
        // })
    }

    render() {
        const {datas, pages, loading, clearfixs} = this.state;
        console.log(pages);
        let p = 5;
        const current = parseInt(this.props.match.params.page);
        const total = parseInt(pages.list[pages.list.length - 1].num);
        console.log(total);
        if(loading){
           return (
               <div history={this.props.history}>
                   <TopNavbar />
                   <SuspendBar />
                   <div className="filter-container">
                       <Filter title="婚礼预算" datas={clearfixs["yusuan"]} />
                       <Filter title="婚礼风格" datas={clearfixs["fengge"]} />
                       <Filter title="主题颜色" datas={clearfixs["zhuti"]} />
                       <Filter title="所在区域" datas={clearfixs["quyu"]} />
                   </div>
                   <SubCards datas={datas} />

                   <div className="pagination-custom">
                       <Pagination defaultCurrent={current} total={total} onChange={this.changePage} />
                   </div>
                   <Footer_ />
               </div>
           );
       }else{
           return <Loading/>
       }
    }
}


export default Anli;