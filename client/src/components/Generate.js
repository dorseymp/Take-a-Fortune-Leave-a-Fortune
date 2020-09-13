import React, {Component} from 'react';
import axios from 'axios';
import brokenCookie from "../SVG/brokenCookie.svg";

class Generate extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      values: []
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    const response = await axios.get('/api/fortunes')
    if (response.status===200) {
      const data = await response.data
      this.setState({values: data})
    } else {
      console.log(response)
    }
  }

render() {
  return (
    <div>
    <div >
      <button className="getFortune" onClick = { this.handleSubmit }>Get a Fortune</button>
      
      { this.state.values.map(value =>
      <div className="brokenCookie">
      <img  src={ brokenCookie } alt="brokenCookie"></img>
      <div className="fortunePaper">
        <div className="upperRightRectangle"></div>
        <div className="upperLeftRectangle"></div>
        <div className="lowerRightRectangle"></div>
        <div className="lowerLeftRectangle"></div>
        <p key={value.toString()} value={value} className="theFortune">{value.value}</p>
      </div></div>
      )}
      </div>
    </div>
  );
}
}

  export default Generate;