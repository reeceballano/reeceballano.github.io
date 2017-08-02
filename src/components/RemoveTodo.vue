<template>
    <md-layout md-align="center" md-flex="100">
      <md-layout md-align="center" md-flex="80">
		<md-button @click="removeTodo" class="md-fab md-fab-bottom-right">
			<md-icon>clear</md-icon>
		</md-button>
      </md-layout>    
    </md-layout>	
	
</template>

<script>
	import axios from 'axios'

	export default {
		props: {
	      todos: {
	        type: Array,
	        required: true
	      }
	    },		
		data() {
			return {
				showTools: true,
			}
		},

		created:function() {
		},

		methods: {
			removeTodo() {
				let todoTrue = this.todos.filter(todo => todo.status == true);
				let trueArray = [];

				for(let x in todoTrue) {
					axios.delete('https://vue-todo-components.firebaseio.com/todos/' + todoTrue[x].id + '.json')
						.then(response => {
							this.$router.push('/todo/');
						})
						.catch(e => {
							console.log(e)
						})
				}
			},

		}
	}
</script>

<style scoped>

</style>