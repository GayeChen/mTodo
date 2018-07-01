import * as types from './types'
export const actions = {
  [types.ADD_TODO]({commit}, title) {
    let todo = {};
    todo = Object.assign({}, {id: Math.random(), completed: false, title});
    commit(types.ADD_TODO, todo);
  },
  [types.REMOVE_TODO]({commit}, id) {
    commit(types.REMOVE_TODO, id);
  },
  [types.TOGGLE_TODO]({commit}, id) {
    commit(types.TOGGLE_TODO, id);
  },
  [types.CLEAR_COMPLETED]({commit}) {
    commit(types.CLEAR_COMPLETED);
  },
  [types.TOGGLE_ALL]({commit}, check) {
    commit(types.TOGGLE_ALL, check);
  },
  [types.CHANGE_FILTER]({commit}, type) {
    commit(types.CHANGE_FILTER, type);
  }
};
