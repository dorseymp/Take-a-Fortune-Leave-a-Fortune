import React, { Component } from "react";
import { Link, Route, HashRouter } from "react-router-dom";
import CustomMessage from "./CustomMessage";
import Generate from "./Generate";
 
class Home extends Component {
  render() {
    return (
        <div className="container">
          <HashRouter>
            <Link to="/generate" className="btn">Take a Fortune,</Link>
            <Link to="/custommessage" className="btn">Leave a Fortune</Link>
            <div>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/custommessage" component={CustomMessage}/>
                <Route exact path="/generate" component={Generate}/>
            </div>
          </HashRouter>
        </div>
    );
  }
}
 
export default Home;
