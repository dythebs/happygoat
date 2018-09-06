import React from 'react'
import "./subCards.css"
import SubCard from './subCard';
class SubCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      data:this.props.datas
      //  [
          // {
          //   "img": "iq.dxlfile.com/mall/original/2017-09/20170915143021306.jpg-w363h281",
          //   "tags": [
          //     "\u6e05\u65b0"
          //   ],
          //   "title": "3580\u5143\u7ea7\u522b\u94bb\u77f3\u5316\u5986\u5e08",
          //   "cast": "\uffe53580",
          //   "zan": "134",
          //   "shopname": "\u5b87\u6db5\u9020\u578b\u5b87\u6db5\u89c6\u89c9",
          //   "span": "\u652f\u6301\u5f02\u5730\u670d\u52a1",
          //   "shophref": "https://sh.daoxila.com/HunQing/Shop/YuHan-Info",
          //   "shoppic": "iq.dxlfile.com/mall/avatar/tiny/2017-09/20170914132374100.jpg",
          //   "anlihref": "/HunQing/Shop/YuHan-Photo-8536",
          //   "changdi": {
          //   }
          // },
        // ]
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps!==this.props){
      data:this.props.datas
    }
  }
  render() {
    const {data} = this.state;
    // const item = data[0];
    // console.log(item.title);
    return (
      <div className="container">
        <div className="column">
          {
            data[0]!==undefined &&
            data.map((item,index) => (
              <SubCard item={item}/>
            ))
          }
        </div>
      </div >
    );
  }
}

export default SubCards;