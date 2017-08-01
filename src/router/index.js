import Vue from 'vue'
import Router from 'vue-router'
import ShowTodos from '@/components/ShowTodos'
import Todo from '@/components/Todo'
import AddTodo from '@/components/AddTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ShowTodos,
      name: 'home'
    },

    {
      path: '/todos/',
      component: ShowTodos,
      name: 'todos'
    },

    {
      path: '/add/',
      component: AddTodo,
      name: 'addtodo'
    },    

    {
      path: '/todo/:id', 
      props: true,
      component: Todo,
      name: 'todo',
    }
  ],

  base: __dirname,
  mode: 'history',
})
