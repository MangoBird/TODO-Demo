import React from 'react'

export class ListItemAdder extends React.Component {
  state = {
    inputText: ''
  }

  render() {
    const { onAdd } = this.props

    return (
      <div>
        <input value={this.state.value} onChange={this.changeInput}></input>
        <button onClick={() => onAdd(this.state.inputText)}>추가</button>
      </div>
    )    
  }

  changeInput = (e) => {
    this.setState({ inputText: e.target.value})
  }
}