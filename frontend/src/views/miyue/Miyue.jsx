import React from 'react'
import ajaxhost from '../../ajaxhost';
import Loading from '../../components/loading/Loading';
import SubCards from '../../components/subPageCard/SubCards';

const debug = true;
const urlSample = 'https://www.daoxila.com/MiYue';

class Miyue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      nextHref:''
    }
  }

  componentDidMount() {
    let that = this;
    fetch(ajaxhost + '/search/miyue', {
      method: 'GET'
    }).then((res) => {
      if (res.ok) {
        res.json().then(function (result) {
          debug && console.log(result);
          if (result.code === 200) {
            that.setState({
              data: result.datas,
              loading:true
            })
          }
        })
      }
    })
  }
  render() {

    const { loading, data } = this.state;
    if (loading) {
      return (
        <div>
          <SubCards datas={data} type='miyue' />
        </div>
      );
    } else {
      return <Loading />
    }
  }
}

export default Miyue;