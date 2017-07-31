<template>
	<span class="md-subheading">{{ title }}: {{ todosRemaining }}</span>	
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