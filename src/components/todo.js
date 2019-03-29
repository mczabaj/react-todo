import React, { Component } from 'react'

// TODO: convert to stateless functional component
class ToDo extends Component {
  render() {
    return (
      <li className='todo-container row' key={this.props.todo.id}>
        <span className='todo-checkbox m-2'>
          <input className="todo-checkbox" type="checkbox" checked={this.props.todo.checked} onChange={() => this.props.onTodoUpdate(this.props.todo)}/>
        </span>

        <span className='todo-text'>
          <input type='text' value={this.props.todo.desc} onChange={() => this.props.onTodoUpdate(this.props.todo)} />
        </span>

        <span className='todo-delete'>
          <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onTodoDelete(this.props.todo.id)}>Delete</button>
        </span>
      </li>
    )
  }
}

export default ToDo
