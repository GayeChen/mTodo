export default class TodoModel {
  constructor() {
    // 向localStorage里面写入的时候需要这个key
    this.STORY_KEY = 'todos';
    this.todos = JSON.parse(localStorage.getItem(this.STORY_KEY)) || [];
    // 这里可以注册监听器，当数据模型发生变化之后会调用这些监听函数
    this.listeners = [];
  }
  
  // 订阅
  subscribe(listener) {
    this.listeners.push(listener);
  }
  
  emit() {
    this.listeners.forEach(listener => listener());
  }
  
  addTodo = (todo) => {
    // todo = {id: Date.now(), completed: false, ...todo};
    todo = Object.assign({}, {id: Math.random(), completed: false}, todo);
    let todos = this.todos;
    todos.push(todo);
    this.notify(todos);
  };
  removeTodo = (id) => {
    let todos = this.todos.filter(todo => {
      return todo.id !== id;
    });
    this.notify(todos);
  };
  toggle = (id) => {
    let todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.notify(todos);
  };
  toggleAll = (event) => {
    let checked = event.target.checked;
    let todos = this.todos.map(todo => {
      todo.completed = checked;
      return todo;
    });
    this.notify(todos);
  };
  clearCompleted = () => {
    let todos = this.todos.filter(todo => !todo.completed);
    this.notify(todos);
  };
  notify = (todos) => {
    this.todos = todos;
    localStorage.setItem(this.STORY_KEY, JSON.stringify(todos));
    this.emit();
  }
}