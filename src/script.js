const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
  // turn this into a form to provide the Todo text.
  // then turn it into a todo element in the list.
  // update the total todo count
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
