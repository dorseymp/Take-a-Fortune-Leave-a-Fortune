import React, { Component } from "react";
import Home from "./components/Home";

 
class Main extends Component {
  render() {
    return (
        <div className="container">
        <div className="redBox">
          <Home/>
        </div>
        </div>
    );
  }
}

export default Main;