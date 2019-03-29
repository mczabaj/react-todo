import React, { Component } from 'react'
import ToDo from './todo'

class ToDos extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.props.onTodoAdd}>New ToDo</button>

        <ul id="todo-list" className="todo-list">
          { this.props.todos.length === 0 && <p>Nothing To Do Today!</p> }
          { (this.props.todos || []).map(todo => <ToDo key={todo.id}
                                               todo={todo}
                                               onTodoDelete={this.props.onTodoDelete}
                                               onTodoUpdate={this.props.onTodoUpdate} />) }
        </ul>
      </div>
    )
  }
}

export default ToDos;
