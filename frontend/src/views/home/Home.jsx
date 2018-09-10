import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Button } from "antd";
import  SuspendBar from "../../components/suspendBar/SuspendBar";
import TopNavbar from "../../components/navbar/TopNavbar";
import "./home.css"
import Header from "../../components/header/Header"
import Content from "../../components/content/Content"
import Footer from '../../components/footer/Footer';
class Home extends React.Component {


  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }

  // }

  componentDidMount(){
    console.log("mount");
  }

  test() {
    this.props.history.push("/homehh");
  }
  render() {
    return(
      <div>

        <TopNavbar/>
        <SuspendBar/>
        <div className="home-content">

          <Header/>
          <Content/>
          <Footer/>

        </div>
        {/* <div className='content'>
          <div className="blog-slider">
            <button style={{ width: '400px' }} onClick={this.test.bind(this)}>huuuuuuuuuuuuuuuuu</button>

          </div>
        </div> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    storeId: state.storeId,
    storeName: state.storeName
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    setStoreName(storeName) {
      dispatch({
        type: 'SET_STORE_NAME',
        storeName: storeName
      })
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);