import React, { Component } from 'react'
import '../../styles/toggle.css'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
        <button id='toggleBtn' onClick={this.toggle}>
          New Character Build</button>
        {this.state.on && this.props.children}
      </div>
    )
  }
}