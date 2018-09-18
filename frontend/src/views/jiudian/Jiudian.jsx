import React from 'react'
import Footer_ from '../../components/footer/Footer_';
import TopNavbar from '../../components/navbar/TopNavbar';
import SuspendBar from '../../components/suspendBar/SuspendBar';
import Loading from '../../components/loading/Loading';
import ajaxhost from '../../ajaxhost';
import {Pagination} from "antd"
import JiudianCard from '../../components/subPageCard/JiudianCard';

const loc = "sh";
const debug = false;
const urlSample = "https://" + loc + ".daoxila.com/HunYan"
// Page-1"
const suffix = "/page-";

class Jiudian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            datas: [
                // {
                //   "title": "\u8001\u6d0b\u623f",
                //   "img": "https://iq.dxlfile.com/hotel/original/2012-09/20120918150552.jpg-w430h325",
                //   "cast": "\uffe5 4880-9980",
                //   "opinions": [
                //     "\u7279\u8272\u9910\u5385",
                //     "23\u684c",
                //     "\u5362\u6e7e\u533a"
                //   ],
                //   "rooms":
                //     [
                //       {
                //         "name": "1\u5385",
                //         "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101057266.jpg-w200h150"
                //       },
                //       {
                //         "name": "\u5305\u573a",
                //         "img": "https://iq.dxlfile.com/hotel/original/2015-03/20150318101196220.jpg-w200h150"
                //       }
                // ]
                // }
            ],
            pages: {
                "total": "\u5171\u627e\u52301241\u6761",
                "list": [
                    {
                        "num": "1",
                        "href": "https://sh.daoxila.com/HunYan/page-1"
                    },
                ],
                "pre": "",
                "next": "https://sh.daoxila.com/HunYan/page-2"
            }
        }
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        let page = this.props.match.params.page;
        let url_ = "";
        if (page === '1') {
            url_ = urlSample;
        } else {
            url_ = urlSample + suffix + page;
        }
        let url = encodeURIComponent(url_).replace(new RegExp("%", "g"), '~');
        let that = this;
        // console.log(url.split('-'));
        fetch(ajaxhost + '/search/hunyanjiudian/' + url, {
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
        fetch(ajaxhost + '/search/hunyanjiudian/' + url, {
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
        const {datas, pages, loading} = this.state;
        const current = parseInt(this.props.match.params.page);
        const total = parseInt(pages.list[pages.list.length - 1].num);
        if (loading) {
            return (
                <div>
                    <TopNavbar/>
                    <SuspendBar/>
                    <JiudianCard datas={datas} type='jiudian' />
                    {/* {loading}?<JiudianCard datas={datas} />:<Loading /> */}
                    <div className="pagination-custom">
                        <Pagination defaultCurrent={current} total={total} onChange={this.changePage}/>
                    </div>
                    <Footer_/>
                </div>
            )
        } else {
            return (
                <div>
                    <Loading/>
                </div>
            )
        }

    }
}

export default Jiudian;