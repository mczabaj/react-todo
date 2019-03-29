import React, { Component } from 'react'
import ToDo from './todo'

class ToDos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: this.props.todos
    }
  }

  render() {
    console.log('props ', this.props)

    return (
      <ul id="todo-list" className="todo-list">
        { this.state.todos.length === 0 && <p>Nothing To Do Today!</p> }
        { this.state.todos.map(todo => <ToDo key={todo.id} id={todo.id}
                                             desc={todo.desc}
                                             checked={todo.checked} />) }
      </ul>
    )
  }
}

export default ToDos;
