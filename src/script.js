import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import 'bootstrap/dist/css/bootstrap.css'

const rootEl = document.getElementById('app');
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

render(<App />, rootEl)

if (module.hot) {
    module.hot.accept();
}

function newTodo() {
  alert('New TODO button clicked!')
  render(<ToDo />, list)
}

function doneTodo() {
  // Mark tod0 as done by:
  // 1) changing checkbox to check
  // 2) updating "done" total
  // 3) changing class and CSS for item (like gray it out)
}

function undoTodo() {
  // Opposite of doneTodo
}

function deleteTodo() {
  // remove this todo from the list
  // update totals accordingly
}
