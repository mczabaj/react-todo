import React, { Component } from 'react'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.checked,
    }

    this.handleChecking = this.handleChecking.bind(this)
  }

  handleChecking(checkedState) {
    this.setState({ checked: !this.state.checked})
    if (this.state.checked === true) {
      console.log ('checkbox checked', this.props.checked)
    }

  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChecking}/>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  checked: false
};

export default Checkbox;
