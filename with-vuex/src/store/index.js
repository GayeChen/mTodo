import Vue from 'vue';
import Vuex from 'vuex';
import {getStorage} from './local'
import {actions} from './actions'
import {mutations} from './mutations'
import {getters} from './getters'
import * as filterTypes from '../components/filter-types'
import {setStorage} from './local'
Vue.use(Vuex);
const state = getStorage() || {
    todos: [],
    filterType: filterTypes.ALL,
};
export const saveStore = () => {
  setStorage(state)
};
export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
