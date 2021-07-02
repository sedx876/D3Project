import React, { Component } from 'react'
import '../../styles/toggle.css'
import {BsFillPlusCircleFill} from "react-icons/bs"

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
          <BsFillPlusCircleFill/></button>
        {this.state.on && this.props.children}
      </div>
    )
  }
}