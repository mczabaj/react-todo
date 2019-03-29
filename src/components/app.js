import React, { Component } from 'react'
import Title from './title'
import ToDos from './todos'

class App extends Component {
  constructor() {
    super()

    this.state = {
      itemCount: 0,
      uncheckedCount: 0,
      todos: [{id: 1, desc: "blah", checked: false},{id: 2, desc: "done", checked: true}]
    }

    this.handleTodoAdd = this.handleTodoAdd.bind(this)
    this.handleTodoDelete = this.handleTodoDelete.bind(this)
    this.handleTodoUpdate = this.handleTodoUpdate.bind(this)
  }

  handleTodoAdd() {
    console.log ("add event fired")
    const id = new Date().getMilliseconds()
    const todo = { id: id,
                   desc: null,
                   checked: false }
    const todos = this.state.todos.push(todo)
    this.setState({ todos })
  }

  handleTodoDelete(todoId) {
    const todos = (this.state.todos || []).filter(t => t.id !== todoId)
    this.setState({ todos })
  }

  handleTodoUpdate(todo) {
    const todos = [ ...this.state.todos ]
    const index = todos.indexOf(todo)
    todos[index] = todo
    this.setState({ todos })
  }

  render() {
    console.log ("render")

    return (
      <main className="container center">
        <Title itemCount={this.state.todos.length}
               uncheckedCount={(this.state.todos || []).filter(t => t.checked === false).length} />
        <ToDos todos={this.state.todos}
               onTodoAdd={this.handleTodoAdd}
               onTodoDelete={this.handleTodoDelete}
               onTodoUpdate={this.handleTodoUpdate} />
      </main>
    )
  }
}

export default App;
