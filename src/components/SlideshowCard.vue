<script setup lang="ts">
import SlideshowGraphic from './card/SlideshowGraphic.vue';
import SlideshowInfo from './card/SlideshowInfo.vue';

const props = defineProps<{ msg: string; reverse?: true }>();
</script>

<template>
	<div v-if="reverse" class="container">
		<SlideshowInfo :msg="props.msg"  :reverse="props.reverse" />
		<SlideshowGraphic  :reverse="props.reverse"/>
	</div>
	<div v-else class="container">
		<SlideshowGraphic  :reverse="props.reverse" />
		<SlideshowInfo :msg="props.msg"  :reverse="props.reverse" />
	</div>
</template>

<style scoped lang="scss">
.container {
	height: 100%;
	width: 100%;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;



	.card-info {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 25px;
		width: 40rem;
		height: 40rem;
		font-size: 40px;
	}
}
</style>
