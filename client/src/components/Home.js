import React, { Component } from "react";
import { Link, Route, HashRouter } from "react-router-dom";
import CustomMessage from "./CustomMessage";
import Generate from "./Generate";
 
class Home extends Component {
  render() {
    return (
        <div>
          <HashRouter>
          {/* <div className="redBox"> */}
            <Link to="/generate" className="btnLeft">Take a Fortune,</Link>
            <Link to="/custommessage" className="btnRight"> Leave a Fortune</Link>
            {/* </div> */}
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
