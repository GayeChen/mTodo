<template>
  <!--template必须有一个根节点-->
  <div class="list-group-item" @dblclick="changeEditableTodo(todo)">
    <div class="row" v-show="todo!=editableTodo">
      <div class="col-md-1">
        <input type="checkbox" :checked="todo.completed"  @change="toggle(todo.id)">
      </div>
      <div class="col-md-10" :class="{del: todo.completed}">
        {{todo.title}}
      </div>
      <div class="col-md-1">
        <button class="btn btn-xs btn-danger" @click="remove(todo.id)">&times;</button>
      </div>
    </div>
    <input type="text" v-show="todo===editableTodo" v-model="todo.title" @keyup="editTitle" @blur="reset" v-auto-focus="todo===editableTodo">
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import * as types from '../store/types'
  export default {
    data() {
      return {
        title: '',
      }
    },
    props: ["todo", "editableTodo"],
    components: {},
    methods: {
      ...mapActions([types.REMOVE_TODO, types.TOGGLE_TODO]),
      remove(id) {
        this[types.REMOVE_TODO](id);
      },
      toggle(id) {
        this[types.TOGGLE_TODO](id);
      },
      changeEditableTodo(todo) {
        this.$emit('changeedit', todo);
      },
      editTitle(e) {
        this.$emit('edittitle', e);
      },
      reset() {
        this.$emit('itemblur');
      }
    },
    directives: {
        autoFocus(ele, bindings) {
            if (bindings.value == true) {
                ele.focus();
            }
        }
    }
  }
</script>
<style scoped="">
  .del {
    text-decoration: line-through;
    color: #c8c8c8;
  }
</style>
