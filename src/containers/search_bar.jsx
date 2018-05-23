import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <form classname="input-group">
        <input />
        <span className='input-group-btn'>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
