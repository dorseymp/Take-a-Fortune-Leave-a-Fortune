import React, {Component} from 'react';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import brokenCookie from "../SVG/brokenCookie.svg";

class Generate extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      values: []
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// Get request for fortune
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
    <FadeIn delay={500} transitionDuration={1000}>
      <button className="getFortune" onClick = { this.handleSubmit }>Get a Fortune</button>
    </FadeIn>
      { this.state.values.map(value =>
    <FadeIn delay={500} transitionDuration={1000}>
      <div className="brokenCookie">
      <img  src={ brokenCookie } alt="brokenCookie"></img>
      <div className="fortunePaper">
        <div className="upperRightRectangle"></div>
        <div className="upperLeftRectangle"></div>
        <div className="lowerRightRectangle"></div>
        <div className="lowerLeftRectangle"></div>
        <p key={value.toString()} value={value} className="theFortune">{value.value}</p>
      </div>
      </div>
    </FadeIn>
      )}
    </div>
    </div>
  );
}
}

  export default Generate;