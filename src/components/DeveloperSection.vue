<script setup lang="ts"></script>

<template>
	<div
		class="developer-title"
		v-motion
		:initial="{ opacity: 0, y: -100 }"
		:visibleOnce="{
			opacity: 1,
			y: 0,
			transitionDuration: '0.2s',
			transitionTimingFunction: 'linear',
		}"
		:delay="1000"
	>
		Developed by<span>,</span>
	</div>
	<div
		class="developer-container"
		v-motion
		:initial="{ opacity: 0, y: -100 }"
		:visibleOnce="{
			opacity: 1,
			y: 0,
			transitionDuration: '0.2s',
			transitionTimingFunction: 'linear',
		}"
		:delay="1500"
	>
		<div class="developer">
			<a href="" target="_blank">
				<div class="circle"><img src="../assets/dan.JPG" /></div>
			</a>
			<span class="name"> Dan Le</span>
		</div>
		<div class="developer">
			<a href="" target="_blank">
				<div class="circle"><img src="../assets/minsung.PNG" /></div>
			</a>
			<span class="name"> Minsung Kim</span>
		</div>
		<div class="developer">
			<a href="" target="_blank">
				<div class="circle"><img src="../assets/DUMA.JPG" /></div>
			</a>
			<span class="name"> Peter Cao</span>
		</div>
		<div class="developer">
			<a href="" target="_blank">
				<div class="circle"><img src="../assets/phong.JPG" /></div>
			</a>
			<span class="name"> Phong Le</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
.developer-container {
	background-color: rgb(30, 30, 30);
	box-shadow: 0 0 35px 0 #292929;
	border-radius: 30px;

	display: flex;
	justify-content: center;
	gap: 3rem;
	align-items: center;
	height: 25rem;
	width: 100%;
	margin: 0;
	overflow-x: auto;

	.circle {
		width: 16em;
		/* Adjust the percentage as needed */
		min-width: 12em;
		height: 16em;
		/* Adjust the percentage as needed */
		background-color: #3498db;
		/* Change the color as desired */
		border-radius: 100%;
		margin: 10px;
		overflow: hidden;
		/* Adjust the spacing between circles */
		transform: scale(0.9);
		transition: all 0.2s ease-in-out;

		&:hover {
			transform: scale(1);
			box-shadow: 0 0 15px 0 rgb(70, 70, 70);
			border: 10px solid white;
		}
	}

	.name {
		font-size: 25px;
		font-weight: bold;
	}

	.developer {
		text-align: center;
	}
}

.developer-title {
	font-size: 40px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 1.5rem;

	span {
		color: #ec625f;
		font-size: 60px;
	}
}
</style>
