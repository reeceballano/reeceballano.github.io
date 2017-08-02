<template>
	<md-layout md-align="center" md-flex="100">
      	<md-layout md-align="left" md-flex="80">
			<div class="todo">
				<h5 class="md-subheading">ID: <strong>{{ id }}</strong> </h5>

				<h5
					md-align="left"
					class="md-subheading" 
					v-show="showNameText" 
					@click="enableEditor()">
						Task Name: <strong>{{ todoText.name }}</strong>
						<small><i>edit</i></small>
				</h5>

				<h5
					md-align="left"
					class="md-subheading" 
					v-show="showEditor">
						Task Name: <strong>{{ newtaskname }}</strong>
				</h5>
			</div>

		</md-layout> 

		<md-layout md-align="left" md-flex="80">
			<md-input-container 
				v-show="showEditor">
					<md-input 
						v-focus="focused" 
						@focus="focused = true" 
						@blur="focused = false"
						id="addtask" 
						ref="myref" 
						type="text" 
						@focusout.native="updateTaskName(todoText.name)" 
						@keyup.enter.native="updateTaskName(todoText.name)" 
						v-model="newtaskname"
						 placeholder="New Task Name!">
					</md-input>
			</md-input-container> 

			<md-switch 
				v-model="todoText.status" 
				@change="updateStatus(todoText.status)" 
				class="md-primary">Update Status
			</md-switch>
	
		</md-layout>    
    </md-layout>	

</template>

<script>

import axios from 'axios'
import { focus } from 'vue-focus';

export default {
	directives: { focus: focus },
	data() {
		return {
			id: this.$route.params.id,
			todoText: [],
			showEditor: false,
			showNameText: true,
			newtaskname: '',
			focused: true,
		}
	},

	mounted: function() {
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

		preUpdate(status) {
			axios.patch('https://vue-todo-components.firebaseio.com/todos/' + this.id + '.json', {
				status: status,
			})
			.then(response => {
				console.log('task updated');
			})
			.catch(e => {
				this.errors.push(e);
			}) 
		},

		updateStatus(todoStat) {
			if(todoStat === true) {
				this.preUpdate(false);

			} else {
				this.preUpdate(true);
			}
		},

		updateTaskName() {
			if(this.newtaskname == '') {
				console.log('taskname cannot be empty!'); 
			} else {
				axios.patch('https://vue-todo-components.firebaseio.com/todos/' + this.id + '.json', {
					name: this.newtaskname,
				})
				.then(response => {
					console.log('task updated');
					this.$router.push('/todo/');
				})
				.catch(e => {
					this.errors.push(e);
				}) 
			}
		},

		enableEditor() {
			this.$nextTick(function() {
				this.$refs.myref.$el.focus();
            });

			this.showNameText = false;
			this.showEditor = true;

		},
	
	}
}

</script>

<style scoped>
	.md-subheading,
	.md-headline {
		text-align: left !important;
	}
</style>