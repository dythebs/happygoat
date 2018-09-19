import React from 'react'
import ajaxhost from '../../ajaxhost';
import SuspendBar from '../../components/suspendBar/SuspendBar';
import JiudianCard from '../../components/subPageCard/JiudianCard';
import Footer_ from '../../components/footer/Footer_';
import {Pagination, message} from 'antd'
import TopNavbar from '../../components/navbar/TopNavbar';
import Loading from '../../components/loading/Loading';
import Filter from '../../components/filter/Filter';

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
            page: '1',
            clearfixs: {
            },
            datas: [

            ],
            pages: {

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
        console.log(url);
        console.log(url_);
        fetch(ajaxhost + '/search/hunshasheying/' + url, {
            method: 'GET'
        }).then((res) => {
            if (res.ok) {
                res.json().then(function (result) {
                    debug && console.log(result,'result-----------');
                    that.setState({
                        datas: result.datas,
                        pages: result.pages,
                        clearfixs:result.clearfixs,
                        loading: true
                    })
                })
            }
        }).catch((res) => {
            console.log(res);
        })
    }

    changePage = (page) => {
        this.setState({
            loading: false,
            page:page
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
                        clearfixs: result.clearfixs,
                        loading: true
                    })
                })
            }
        }).catch((res) => {
            console.log(res);
        })
    }

    handleFilter = (index, filter) => {
        this.setState({
            loading: false
        })
        const { clearfixs } = this.state
        // let url_ = urlSample +'/'+ yusuan[index];
        let url_ = clearfixs[filter][index].href;
        let url = encodeURIComponent(url_).replace(new RegExp("%", "g"), '~');
        console.log(url);
        let that = this;
        fetch(ajaxhost + '/search/hunshasheying/' + url, {
            method: 'GET'
        }).then((res) => {
            if (res.ok) {
                res.json().then(function (result) {
                    debug && console.log('loading', result);
                    that.setState({
                        clearfixs: result.clearfixs,
                        datas: result.datas,
                        pages: result.pages,
                        loading: true
                    })
                }).catch((res) => {
                    message.warning('没有符合要求的案例哦~')
                    console.log(res);
                    that.setState({
                        loading: true
                    })
                })
            }
        }).catch((res) => {
            console.log(res);
        })
    }

    render() {
        const { datas, pages, loading ,clearfixs, page} = this.state;

       if(loading){
           const current = parseInt(page);
           const total = parseInt(pages.list[pages.list.length - 1].num);
           console.log(current,total,'page')
           return (
               <div>
                   <TopNavbar />
                   <SuspendBar />

                   <div className="filter-container">
                       <Filter title="价格" datas={clearfixs["jiage"]} index='jiage' filter={this.handleFilter} />
                       <Filter title="区域" datas={clearfixs["quyu"]} index='quyu' filter={this.handleFilter} />
                       <Filter title="风格" datas={clearfixs["fengge"]} index='fengge' filter={this.handleFilter} />
                   </div>
                   <JiudianCard datas={datas} type='sheying' />
                   <div className="pagination-custom">
                       {/* <Pagination defaultCurrent={1} total={10} onChange={this.changePage} /> */}
                       <Pagination current={current} total={10} onChange={this.changePage} />
                   </div>
                   <Footer_ />
               </div>
           );
       }else{
           return <Loading/>
       }
    }
}

export default Sheying;