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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Provider store={store}>
        <RouterIndex/>
      </Provider>
    );
  }
}

export default App;
