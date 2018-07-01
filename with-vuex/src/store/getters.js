export const getters = {
  haveUnfinished(state) {
    return Boolean(state.todos.filter(todo=>!todo.completed).length);
  },
  haveFinished(state) {
    return Boolean(state.todos.filter(todo=>todo.completed).length);
  },
  haveTodo(state) {
    return Boolean(state.todos.length);
  }
};
