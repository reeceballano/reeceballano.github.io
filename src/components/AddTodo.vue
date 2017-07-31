<template>
	<md-input-container>
		<md-input id="addtask" type="text" @keyup.enter.native="addTodo" v-model="addTask" placeholder="Please add your task here!"></md-input>
	</md-input-container>
</template>

<script>
	
	import axios from 'axios'

	export default {
		data() {
			return {
				addTask: '',
				isActive: false,
				errors: [],
			}
		},

		methods: {
			addTodo() {
				if(this.addTask == '') {
					console.log('cannot be empty')
				} else {
					axios.post('https://vue-todo-components.firebaseio.com/todos.json', {
						name: this.addTask,
						status: this.isActive,
					})
						.then(reponse => {
							console.log('task added')
							this.addTask = '';
						})
						.catch(e => {
							this.errors.push(e);
						})					
				}

			}
		}
	}
</script>

<style>
	.add-todo {
		margin-bottom: 20px;
	}

	#addtask > input,
	#addtask input,
	.el-input__inner {
	    border-radius: 0 !important;
	    padding: 30px 15px !important;
	    font-size: 20px !important;
	}		
</style>