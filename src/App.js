import React, { Component } from 'react';
import './App.css';
import Home from "./Home/Home";
import Login from "./Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "login"
    }
  }

  setPage = (page) => {
    this.setState({
        page: page
    })
  };

  render() {
    let page = <Login setPage={this.setPage} />;
    switch (this.state.page) {
        case ("login"):
          page = <Login setPage={this.setPage}/>;
          break;
        case ('home'):
          page = <Home setPage={this.setPage} />;
          break;
        default:
          page = <Login setPage={this.setPage} />;
          break;
    }
    return page;
  }
}

export default App;
