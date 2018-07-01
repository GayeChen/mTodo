import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    let {todo, removeTodo, toggle} = this.props;
    return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-1">
          <input type="checkbox" checked={todo.completed} onChange={() => toggle(todo.id)}/>
        </div>
        <div className="col-md-10" style={{
          textDecoration: todo.completed ? 'line-through' : '',
          color: todo.completed ? "#c8c8c8" : '#000'
        }}>
          {todo.title}
        </div>
        <div className="col-md-1">
          <button className="btn btn-danger btn-xs" onClick={() => removeTodo(todo.id)}>&times;</button>
        </div>
      </div>
    </li>
    )
  }
}