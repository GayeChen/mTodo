import React from 'react';

const ENTRY_KEY = 13;

export default class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  
  handleKeyDown = (event) => {
    if (event.keyCode === ENTRY_KEY) {
      let title = event.target.value;
      this.props.addTodo({title})
    }
  };
  
  render() {
    return (
    <div>
      <input type="text" className="form-control" autoFocus={true} onKeyUp={this.handleKeyDown}/>
    </div>
    )
  }
}