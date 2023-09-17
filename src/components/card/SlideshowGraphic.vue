<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ img: string; reverse?: true }>();

function getURL() {
	return new URL(`../../assets/gif/${props.img}`, import.meta.url);
}

const tiltReverse = computed(() => (props.reverse ? "2deg" : "-2deg"));
</script>

<template>
	<img
		:src="getURL() as any"
		class="card"
		v-if="reverse"
		v-motion
		:initial="{ opacity: 0, x: 100 }"
		:visibleOnce="{
			opacity: 1,
			x: 0,
			transitionDuration: '0.2s',
			transitionTimingFunction: 'linear',
		}"
		:delay="800"
	/>
	<img
		:src="getURL() as any"
		v-else
		class="card"
		v-motion
		:initial="{ opacity: 0, x: -100 }"
		:visibleOnce="{
			opacity: 1,
			x: 0,
			transitionDuration: '0.2s',
			transitionTimingFunction: 'linear',
		}"
		:delay="800"
	/>
</template>

<style scoped lang="scss">
.card {
	border-color: rgb(44, 44, 44);
	border-width: 5px;
	border-radius: 25px;
	box-shadow: 0 0 30px 0 black;
	height: 40rem;
	rotate: v-bind('tiltReverse');
}
</style>
