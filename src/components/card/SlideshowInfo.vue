<script setup lang="ts">
const props = defineProps<{ header: string; msg: string; reverse: boolean }>();
</script>
<template>
	<div
		v-if="reverse"
		class="card-info"
		v-motion
		:initial="{ opacity: 0, x: -100 }"
		:visibleOnce="{
			opacity: 1,
			x: 0,
			transitionDuration: '0.2s',
			transitionTimingFunction: 'linear',
		}"
	>
		<div class="header">{{ props.header }}</div>
		<div class="msg">{{ props.msg }}</div>
	</div>
	<div
		v-else
		class="card-info"
		v-motion
		:initial="{ opacity: 0, x: 100 }"
		:visibleOnce="{
			opacity: 1,
			x: 0,
			transitionDuration: '0.2s',
			transitionTimingFunction: 'linear',
		}"
	>
		<div class="header">{{ props.header }}</div>
		<div class="msg">{{ props.msg }}</div>
	</div>
</template>

<style scoped lang="scss">
.card-info {
	display: flex;
	flex-direction: column;
	border-radius: 30px;
	align-items: center;
	justify-content: center;
	padding: 25px;
	width: 40rem;

	.header {
		font-size: 50px;
		font-weight: bold;
		color: #ec625f;
	}

	.msg {
		font-size: 25px;
		font-weight: lighter;
		text-align: center;
	}
}
</style>
