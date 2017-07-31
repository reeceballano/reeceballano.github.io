<template>
<div id="app" class="phone-viewport">
  <md-toolbar md-theme="default">
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>
    <app-title></app-title>
    <md-button class="md-icon-button">
      <md-icon>favorite</md-icon>
    </md-button>
  </md-toolbar>

  <md-layout md-align="center">
    <md-layout md-align="center" md-flex="100">
      <md-layout style="margin-top: 30px" md-align="center" md-flex="35">
        <todo-counter v-bind:todos="todos"></todo-counter>
      </md-layout>    
    </md-layout>

    <md-layout md-align="center" md-flex="100">
      <md-layout md-align="center" md-flex="35">
        <add-todo></add-todo>
      </md-layout>    
    </md-layout>

    <md-layout md-align="center" md-flex="100">
      <md-layout md-align="center" md-flex="35">
        <show-todos v-bind:todos="todos"></show-todos>
      </md-layout>    
    </md-layout>

    <md-layout md-align="center" md-flex="100">
      <md-layout md-align="center" md-flex="35">
        <remove-todo v-bind:todos="todos"></remove-todo>
      </md-layout>    
    </md-layout>
  </md-layout>
</div>  
</template>

<script>
  import axios from 'axios'

  import ShowTodos from './components/showtodos';
  import AppTitle from './components/apptitle';
  import AddTodo from './components/addtodo';
  import RemoveTodo from './components/removetodo';
  import TodoCounter from './components/todocounter';


  export default {
    name: 'app',
    components: {
      'show-todos': ShowTodos,
      'app-title': AppTitle,
      'add-todo': AddTodo,
      'remove-todo': RemoveTodo,
      'todo-counter': TodoCounter,
    },
    data() {
      return {
        todos: [],
      }
    },
    created:function() {
      this.getTodos();
    },    
    methods: {
      getTodos() {
        let self = this;
        axios.get('https://vue-todo-components.firebaseio.com/todos.json')
          .then((response) => {
            self.todos = response.data
            let todosArray = [];
            for(let key in self.todos) {
              self.todos[key].id = key;
              todosArray.push(self.todos[key]);
            }
            self.todos = todosArray;
          })
        setTimeout(this.getTodos, 500); 
      },      
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
