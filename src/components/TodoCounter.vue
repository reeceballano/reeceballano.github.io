<template>
	<md-layout md-align="center" md-flex="100">
		<md-layout style="margin-top: 50px" md-align="center" md-flex="80">
			<span class="md-headline">{{ title }}: {{ todosRemaining }}</span>	
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
				title: 'Task Remaining',
				errors: [],
			}
		},
		computed: {
			todosRemaining() {
				return this.todos.filter(todo => todo.status == false).length
			},
		},		
		methods: {
		}
	}
</script>

<style scoped>
</style>