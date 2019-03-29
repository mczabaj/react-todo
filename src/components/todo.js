import React, { Component } from 'react'
import Checkbox from './checkbox'

class ToDo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      desc: this.props.desc,
      checked: this.props.checked
    }
  }

  render() {
    return (
      <li className='todo-container row' key={this.state.id}>
        <span className='todo-text'>{this.state.desc}</span>
        <span className='todo-checkbox'>
          <Checkbox checked={this.state.checked} />
        </span>
      </li>
    )
  }
}

export default ToDo;
