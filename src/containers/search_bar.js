import React, { Component } from 'react'



export default class Searchbar extends Component {

  constructor(props){
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
  }

  state = {
    term: ''
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();

    // fetching weatehr data
  }

  render() {
    const { term } = this.state
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}
        >
        <input
          placeholder="Get a 5 day forecast in your favorite cities!"
          className="form-control"
          value={term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}
