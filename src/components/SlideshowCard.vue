<script setup lang="ts">
import SlideshowGraphic from "./card/SlideshowGraphic.vue";
import SlideshowInfo from "./card/SlideshowInfo.vue";

const props =
	defineProps<{ header: string; msg: string; img: string; reverse?: true }>();
</script>

<template>
	<div v-if="reverse" class="container">
		<SlideshowInfo
			:header="props.header"
			:msg="props.msg"
			:reverse="props.reverse"
		/>
		<SlideshowGraphic :img="props.img" :reverse="props.reverse" />
	</div>
	<div v-else class="container">
		<SlideshowGraphic :img="props.img" :reverse="props.reverse" />
		<SlideshowInfo
			:header="props.header"
			:msg="props.msg"
			:reverse="props.reverse"
		/>
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
}
</style>
