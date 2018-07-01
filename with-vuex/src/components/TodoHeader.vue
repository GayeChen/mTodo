<template>
  <!--template必须有一个根节点-->
  <div>
    <input type="text" autofocus class="form-control" @keyup.13="add" v-model="title">
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import * as types from '../store/types'
  export default {
    data() {
      return {
        title: '',
       /* // 不能传todo,如果传了一个引用类型，后面v-model改变时，会引发数据的改变
        todo: {
          id: Math.random(),
          completed: false,
          title: '',
        }*/
      }
    },
    components: {},
    methods: {
      ...mapActions([types.ADD_TODO]),
      add(){
        // 不能传todo,如果传了一个引用类型，后面v-model改变时，会引发数据的改变
        this[types.ADD_TODO](this.title);
        this.title = '';
      }
    }
  }
</script>
<style scoped="">

</style>
