<template>
	<div class="todo">
	  <md-toolbar md-theme="default">
	    <md-button class="md-icon-button">
	      <md-icon>menu</md-icon>
	    </md-button>
	    <app-title></app-title>
<!-- 	    <md-button class="md-icon-button">
	      <md-icon>favorite</md-icon>
	    </md-button> -->
	  </md-toolbar>
	</div>
</template>

<script>

import AppTitle from '@/components/apptitle';

export default {
	components: {
		'app-title': AppTitle,
	},
	data() {
		return {
		}
	}
}

</script>

<style scoped>
</style>