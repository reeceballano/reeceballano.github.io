<template>
<div id="app" class="phone-viewport">

  <todo-header></todo-header>

  <md-layout md-align="center">

    <todo-counter :todos="todos"></todo-counter>
    <transition name="page" mode="out-in">   
      <router-view :todos="todos"></router-view>
    </transition>  

    <router-link to="/add">
      <md-button class="md-fab md-fab-bottom-left">
        <md-icon>add</md-icon>
      </md-button>
    </router-link>  

    <router-link to="/">
    <md-button class="md-fab md-primary md-fab-bottom-center">
    <md-icon>dialpad</md-icon>
    </md-button>
    </router-link>  

    <remove-todo :todos="todos"></remove-todo>

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
  import Header from './components/header';


  export default {
    name: 'app',
    components: {
      'show-todos': ShowTodos,
      'app-title': AppTitle,
      'add-todo': AddTodo,
      'remove-todo': RemoveTodo,
      'todo-counter': TodoCounter,
      'todo-header': Header,
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

  .page-enter-active, .page-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }  

  @media screen and (min-width: 981px) {
    .md-layout {
      width: 40%;
      margin: 0 auto;
    }
  }

</style>
