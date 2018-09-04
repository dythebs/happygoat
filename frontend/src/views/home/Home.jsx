import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Button } from "antd";

class Home extends React.Component {


  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }

  // }


  render() {
    return(
      <div>
        <p>huhu</p>
        <Button>hhh</Button>
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