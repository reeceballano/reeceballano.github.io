<template>
	<md-layout md-align="center" md-flex="100">
      	<md-layout md-align="center" md-flex="80">
			<div class="todo">
				<h5 class="md-subheading">ID: {{ id }} </h5>
				<h3 class="md-title">Task Name: {{ todoText.name }}</h3>
			</div>		
		</md-layout> 

		<md-layout md-align="center" md-flex="80">
			<md-button @click="updateStatus(id, todoText.status)" class="md-raised md-primary">Update Status</md-button>	
		</md-layout>    
    </md-layout>	

</template>

<script>

import axios from 'axios'

export default {
	data() {
		return {
			id: this.$route.params.id,
			todoText: [],
		}
	},
	created: function() {
		this.getInfo()
	},
	methods: {
		getInfo() {
			let self = this;
	        axios.get('https://vue-todo-components.firebaseio.com/todos/' + this.id + '.json')
	          .then((response) => {
	            self.todoText = response.data
	          })
    	},

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
				this.$router.push('/todo/')

			} else {
				this.preUpdate(id, true);
				this.$router.push('/todo/')
			}
		},

		returnHome() {
		}		
	}
}

</script>

<style scoped>
</style>