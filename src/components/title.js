import React, { Component } from 'react'

class Title extends Component {
  render() {
    return (
      <span className="row">
        <span className="controls col-sm">Item count: <span id="item-count" className="badge badge-secondary">{this.formatItemCount()}</span></span>
        <h1 className="col-sm center title">My ToDo App</h1>
        <span className="controls col-sm">Unchecked count: <span id="unchecked-count" className="badge badge-secondary">{this.formatUncheckedCount()}</span></span>
      </span>
    )
  }

  formatItemCount() {
    const itemCount = this.props.itemCount
    return itemCount === 0 ? 'Zero' : itemCount
  }

  formatUncheckedCount() {
    const uncheckedCount = this.props.uncheckedCount
    return uncheckedCount === 0 ? 'Zero' : uncheckedCount
  }
}

export default Title
