<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
</script>

<template>
	<div class="wrapper">
		<HomeView />
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	box-sizing: border-box;
	font-family: "Roboto", Arial, sans-sserif;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
