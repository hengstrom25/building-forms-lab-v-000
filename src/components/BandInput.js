// Add BandInput component
<<<<<<< HEAD

import React, { Component } from 'react'
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';
>>>>>>> fbea3befe6438b088498b4e1ec9eb88768a5b745


class BandInput extends Component {
<<<<<<< HEAD

  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createBand(this.state.name)
    this.setState({
      name: ""
    })
  }

=======
  state = {
    name: ''
  }
  
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    const band = {...this.state};
    this.props.addBand(band);
    this.setState({
      name: ''
    });
  }
  
>>>>>>> fbea3befe6438b088498b4e1ec9eb88768a5b745
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input 
            type="submit"
          />
        </form>
      </div>
    )
  }
}


export default BandInput
