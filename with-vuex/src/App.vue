<template>
  <div class="container" :style="{margin: '30px 0'}">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <TodoHeader/>
          </div>
          <div class="panel-body">
            <ul class="list-group">
              <li class="list-group-item">
                <input type="checkbox" @change="toggleA(allCompleted)" v-model="allCompleted" v-show="haveTodo">
                {{text}}
              </li>
              <TodoItem v-for="(todo, index) in showTodos" :todo="todo" :key="index" :editableTodo="editableTodo" @changeedit="changeEditableTodo" @edittitle="editTitle" @itemblur="reset"/>
            </ul>
          </div>
          <div class="panel-footer" :style="{height: '50px'}">
            <TodoFooter :filtertype="filterType" @changefilter="change"></TodoFooter>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import TodoItem from './components/TodoItem.vue'
  import {mapState, mapActions, mapGetters} from 'vuex'
  import * as filterTypes from './components/filter-types'
  import * as types from './store/types'
  import {saveStore} from './store/index'
  export default {
    name: 'app',
    components: {
      TodoHeader,
      TodoFooter,
      TodoItem
    },
    mounted() {
        this.subscribe(saveStore);
    },
    data() {
      return {
        filterType: filterTypes.ALL,
        allCompleted: false,

        editableTodo: '',
        oldTitle: '',
        listeners: []
      }
    },
    computed: {
      ...mapState(['todos']),
      ...mapGetters(['haveTodo']),
      text() {
          return this.haveTodo ? (this.allCompleted ? "全部取消":'全部选中') : null
      },
      showTodos() {
          return this.todos.filter(todo=>{
              switch (this.filterType) {
                case filterTypes.ACTIVE:
                    return !todo.completed;
                case filterTypes.COMPLETED:
                    return todo.completed;
                default:
                    return todo;
              }
          })
      }
    },
    methods: {
      ...mapActions([types.TOGGLE_ALL]),
      toggleA(check) {
        this[types.TOGGLE_ALL](check);
      },
      change(type) {
        this.filterType  = type;
        console.log(this.filterType);
      },
      changeEditableTodo(todo) {
        this.editableTodo = todo;
        this.oldTitle = todo.title;
      },
      editTitle(e) {
          if (e.keyCode === 13) {
              this.editableTodo = '';
          } else if (e.keyCode === 27) {
              this.editableTodo.title = this.oldTitle;
          }
          this.dispatch();
      },
      reset() {
          this.editableTodo = '';
      },
      subscribe(listener) {
        this.listeners.push(listener)
      },
      dispatch() {
        this.listeners.forEach(l=>l());
      },
    }
  }
</script>

<style>
</style>
