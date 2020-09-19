import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import axios from 'axios';

class CustomMessage extends Component {
  constructor(props) {
    super(props);
// Initial state for textarea and characters remaining
    this.state = { 
      submitted: false, 
      value: '',
      charactersRemaining: 60
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

// Set character limit
  handleChange(event) {
    const input = event.target.value;
    this.setState({
      value: input,
      charactersRemaining: 60 - input.length
    });
  }
 
// If textarea is empty, alert
// If text is entered, send post request 
  handleSubmit(event) {
    event.preventDefault();
    
    if (event.target.value === "") {
      alert("You forgot to enter a fortune...");
    } else {
    this.setState({
      submitted: true
    })
    const data = {
      value: this.state.value
    }

    axios.post('/api/fortunes', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('uh oh'));
    }
  }
  
// Clear textarea after submission 
  handleClear(event) {
    event.preventDefault();
    this.setState ({
      submitted: false,
      value: '',
      charactersRemaining: 60
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      {!this.state.submitted ? (
        <FadeIn delay={500} transitionDuration={1000}>
        <div>
          <textarea maxLength="60" className="typeFortune" onChange={this.handleChange}></textarea>
          <p className="charactersRemaining">Characters remaining: {this.state.charactersRemaining}</p>
          <button className='submit' onClick ={this.handleSubmit} value={this.state.value}> Submit </button>
        </div>
        </FadeIn>
        ) : (
      
        <div>
        <FadeIn delay={500} transitionDuration={1000}>
          <p id ="submittedText">Your message "{this.state.value}" has been submitted!</p>
          <button className='submit' onClick ={this.handleClear} value={this.state.value}> Submit Another </button>
        </FadeIn>
        </div>
        )}
      </form>
    );
  }
}

  export default CustomMessage;