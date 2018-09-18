import React from 'react'
import ajaxhost from '../../ajaxhost';
import SuspendBar from '../../components/suspendBar/SuspendBar';
import JiudianCard from '../../components/subPageCard/JiudianCard';
import Footer_ from '../../components/footer/Footer_';
import {Pagination} from 'antd'
import TopNavbar from '../../components/navbar/TopNavbar';
import Loading from '../../components/loading/Loading';

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

       if(loading){
           const current = parseInt(this.props.match.params.page);
           const total = parseInt(pages.list[pages.list.length - 1].num);
           return (
               <div>
                   <TopNavbar />
                   <SuspendBar />
                   <JiudianCard datas={datas} type='sheying' />
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

export default Sheying;