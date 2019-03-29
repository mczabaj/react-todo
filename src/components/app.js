import React, { Component } from 'react'
import ToDos from './todos'

class App extends Component {
  constructor() {
    super()

    this.state = {
      itemCount: 0,
      uncheckedCount: 0,
      todos: [{id: 1, desc: 'todo 1', checked: false},{id: 2, desc: 'todo 2', checked: true}]
    }

    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo) {
    this.setState({ itemCount: this.state.itemCount + 1})
  }

  render() {
    return (
      <div className="container center">
        <span className="row">
          <span className="controls col-sm">Item count: <span id="item-count" className="badge badge-secondary">{this.formatItemCount()}</span></span>
          <h1 className="col-sm center title">My ToDo App</h1>
          <span className="controls col-sm">Unchecked count: <span id="unchecked-count" className="badge badge-secondary">{this.formatUncheckedCount()}</span></span>
        </span>
        <button className="btn btn-primary" onClick={() => this.handleAddTodo(todo)}>New ToDo</button>
        <ToDos todos={this.state.todos} />
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
}

export default App;
