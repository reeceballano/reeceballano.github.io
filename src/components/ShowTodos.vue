<template>
	<md-list>
		<md-list-item
			@click="updateStatus(todo.id, todo.status)"
			v-bind:class="{ active: todo.status }"
			v-for="todo in todos">	
			<md-icon v-if="todo.status == true" class="md-accent">sentiment_very_satisfied</md-icon>		
			<md-icon v-else>sentiment_neutral</md-icon>		
			<span><label>{{ todo.name }}</label></span>
		</md-list-item>
	</md-list>
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
				errors: [],
				ischeck: [],
				dialogVisible: false,
			}
		},
		methods: {
			preUpdate(id, todoStat) {
				axios.patch('https://vue-todo-components.firebaseio.com/todos/' + id + '.json', {
					status: todoStat,
				})
				.then(response => {
					console.log('task updated');
				})
				.catch(e => {
					this.errors.push(e);
				}) 
			},

			updateStatus(id, todoStat) {
				if(todoStat === true) {
					this.preUpdate(id, false);
				} else {
					this.preUpdate(id, true);
				}
			},

		    removeTodo(key) {
		      let self = this;

		      axios.delete('https://vue-todo-components.firebaseio.com/todos/' + key + '.json')
			    console.log('item removed')
		      .catch(e => {
		        this.errors.push(e)
		      }) 
		    },
		}
	}
</script>

<style scoped>
	ul {
	    padding-left: 0;
	    list-style-type: none;
	    text-align: left;	
	    width: 100%;
	}

	ul li {
		padding-top: 3px;
		padding-bottom: 3px;
		font-size: 18px;
	}

	li:hover {
		opacity: 0.8;
	}

	.el-checkbox {
		display: block;
		text-align: left;
		margin-left: 0;
		margin-bottom: 7px;
	}

	.show-todos {
	    margin-bottom: 30px;
	    padding-bottom: 30px;
	    border-bottom: 1px solid #bebebe;		
	}

	li .el-icon-circle-check,
	li .el-icon-setting,
	li .el-icon-circle-close {
		cursor: pointer;
		display: none;
	}

	li:hover .el-icon-setting,
	li:hover .el-icon-circle-check,
	li:hover .el-icon-circle-close {
		display: inline;
	}

	li i {
		text-decoration: none !important;
	}

	li.active label {
		text-decoration: line-through;
		color: #13CE66;
	}

	li label {
		-webkit-transition: all ease-in-out 0.7s !important;
			-moz-transition: all ease-in-out 0.7s !important;
				transition: all ease-in-out 0.7s !important;		
		
	}

	li:hover label {
		cursor: pointer;
		color: #13CE66;
	}

	.el-icon-circle-check:before {
	    color: #6be4a1;
	}

	.el-icon-circle-close:before {
	    color: #ef3b3b;
	}	
</style>