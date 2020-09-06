import React, {Component} from 'react';
import axios from 'axios';

class CustomMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      submitted: false, 
      value: '',
      charactersRemaining: 60
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState({
      value: input,
      charactersRemaining: 60 - input.length
    });
  }
  
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

    axios.post('http://localhost:5000/api/fortunes', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('uh oh'));
    }
  }
  
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
        <div>
          <textarea maxLength="60" className="typeFortune" onChange={this.handleChange}></textarea>
          <p>Characters remaining: {this.state.charactersRemaining}</p>
          <button className='submit' onClick ={this.handleSubmit} value={this.state.value}> Submit </button>
        </div>
        ) : (
        <div>
          <p id ="submittedText">Your message "{this.state.value}" has been submitted!</p>
          <button className='submit' onClick ={this.handleClear} value={this.state.value}> Submit Another </button>
        </div>
        )}
      </form>
    );
  }
}

  export default CustomMessage;