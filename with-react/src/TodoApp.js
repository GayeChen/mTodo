import React from 'react';
import TodoHeader from './components/TodoHeader'
import TodoItem from './components/TodoItem'
import TodoFooter from './components/TodoFooter'
import * as filterTypes from './components/filter-types'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*  todos: [
            {id: Math.random(), title: '今天学习React', completed: true},
        ],*/
      filterType: filterTypes.ALL
    }
  }
  
  changeFilterType = (type) => {
    this.setState({
      filterType: type
    })
  };
  
  render() {
    // let todos = this.state.todos;
    let {model} = this.props;
    let todos = model.todos;
    let activeTodoCount = todos.reduce((count, todo) => count + !todo.completed, 0);
    let completedTodoCount = todos.length - activeTodoCount;
    let showTodos = todos.filter(todo => {
      switch (this.state.filterType) {
        case filterTypes.ACTIVE:
          return !todo.completed;
        case filterTypes.COMPLETED:
          return todo.completed;
        default:
          return true;
      }
    });
    let main = (
    <ul className="list-group">
      {
        todos.length ? (
        <li className="list-group-item">
          <input type="checkbox" checked={activeTodoCount === 0}
                 onChange={model.toggleAll}/>{activeTodoCount === 0 ? '全部取消' : '全部选中'}
        </li>
        ) : null
      }
      {
        showTodos.map((todo, index) => (
        <TodoItem
        todo={todo}
        key={index}
        removeTodo={model.removeTodo}
        toggle={model.toggle}
        />
        ))
      }
    </ul>
    );
    return (
    <div className="container" style={{marginTop: 20}}>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <TodoHeader addTodo={model.addTodo}/>
            </div>
            <div className="panel-body">
              {main}
            </div>
            <div className="panel-footer">
              <TodoFooter
              activeTodoCount={activeTodoCount}
              changeFilterType={this.changeFilterType}
              filterType={this.state.filterType}
              clearCompleted={model.clearCompleted}
              completedTodoCount={completedTodoCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}