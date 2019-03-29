import React, { Component } from 'react'
import ToDo from './todo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      itemCount: 0,
      uncheckedCount: 0,
      todos: [{id: 1, desc: 'todo 1'},{id: 2, desc: 'todo 2'}]
    }
  }

  render() {
    return (
      <div className="container center">
        <span className="row">
          <span className="controls col-sm">Item count: <span id="item-count" className="badge badge-secondary">{this.formatItemCount()}</span></span>
          <h1 className="col-sm center title">My ToDo App</h1>
          <span className="controls col-sm">Unchecked count: <span id="unchecked-count" className="badge badge-secondary">{this.formatUncheckedCount()}</span></span>
        </span>
        <button className="btn btn-primary" onClick={this.newTodo}>New ToDo</button>
        <ul id="todo-list" className="todo-list">
          { this.state.todos.length === 0 && <p>Nothing To Do Today!</p> }
          { this.state.todos.map(todo => <li key={todo.id}>{todo.desc}</li>) }
        </ul>
      </div>
    )
  }

  formatItemCount() {
    const itemCount = this.state.itemCount
    return itemCount === 0 ? 'Zero' : itemCount
  }

  formatUncheckedCount() {
    const uncheckedCount = this.state.uncheckedCount
    return uncheckedCount === 0 ? 'Zero' : uncheckedCount
  }

  newTodo() {
    alert("Add a new to do")
  }
}

export default App;
