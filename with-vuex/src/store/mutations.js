import * as types from './types'
import {setStorage} from  './local'
export const mutations  = {
  [types.ADD_TODO](state, todo){
    state.todos.push(todo);
    setStorage(state);
  },
  [types.REMOVE_TODO](state, id){
    state.todos = state.todos.filter(todo=>todo.id!==id);
    setStorage(state);
  },
  [types.TOGGLE_TODO](state, id) {
    state.todos = state.todos.map(todo=>{
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setStorage(state);
  },
  [types.CLEAR_COMPLETED](state) {
    state.todos = state.todos.filter(todo=>todo.completed === false);
    setStorage(state);
  },
  [types.TOGGLE_ALL](state, check) {
    state.todos = state.todos.map(todo=>{
      todo.completed = check;
      return todo;
    });
    setStorage(state);
  },
  [types.CHANGE_FILTER](state, type) {
    state.filterType = type;
    setStorage(state);
  }
};
