import React, { Component } from 'react';
// import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { createStore } from 'redux'
import { Provider } from "react-redux";
import RouterIndex from './router';
import reducer from './reducer/reducer';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterIndex/>
      </Provider>
    );
  }
}

export default App;
