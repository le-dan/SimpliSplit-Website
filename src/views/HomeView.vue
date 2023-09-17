<script setup lang="ts">
import SlideshowCard from "@/components/SlideshowCard.vue";
import DeveloperSection from "@/components/DeveloperSection.vue";
import Logo from "@/components/Logo.vue";
import FootNote from "@/components/FooterSection.vue";
import { IconFileTypeVue } from "@iconify-prerendered/vue-vscode-icons";
import { IconFileTypePython } from "@iconify-prerendered/vue-vscode-icons";
import { IconFileTypeReactts } from "@iconify-prerendered/vue-vscode-icons";
import { IconFileTypeFirebase } from "@iconify-prerendered/vue-vscode-icons";
import { IconFileTypeTailwind } from "@iconify-prerendered/vue-vscode-icons";
import { IconFileTypeTypescriptOfficial } from "@iconify-prerendered/vue-vscode-icons";
import { IconFileTypeLightExpo } from "@iconify-prerendered/vue-vscode-icons";

const msg =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique blandit neque, id venenatis diam feugiat ut.";
</script>

<template>
	<body>
		<div class="intro-section">
			<div class="title" v-motion-fade :delay="800">
				<div class="title-border">
					<Logo />
					<span class="title-vt"> vt</span>
					<span class="title-xi">xi</span>
				</div>
			</div>
			<div class="description-section">
				<div
					class="description-header"
					v-motion
					:initial="{ opacity: 0, x: 150 }"
					:enter="{
						opacity: 1,
						x: 0,
						transitionDuration: '0.2s',
						transitionTimingFunction: 'linear',
					}"
					:delay="1500"
				>
					About <Logo />,
				</div>
				<div
					class="description"
					v-motion
					:initial="{ opacity: 0, x: 100 }"
					:enter="{
						opacity: 1,
						x: 0,
						transitionDuration: '0.2s',
						transitionTimingFunction: 'linear',
					}"
					:delay="2500"
				>
					<h3>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris tristique blandit neque, id venenatis diam
						feugiat ut. Nulla faucibus quam sit amet lacus iaculis
						aliquet. Suspendisse malesuada libero id commodo
						sollicitudin. Pellentesque vel purus ac dolor gravida
						ultricies. Nullam non ligula vel elit congue viverra.
						Pellentesque ornare lacus id purus molestie bibendum.
						Etiam dictum eros a elit mollis consectetur. Sed ut
						placerat nulla. Quisque sit amet ultrices lacus, id
						suscipit augue. Curabitur tempor leo vel ornare
						interdum.
					</h3>
				</div>
			</div>
		</div>

		<div class="slideshow-section">
			<SlideshowCard :msg="msg" :initial="true" />
			<SlideshowCard :msg="msg" :initial="false" reverse />
			<SlideshowCard :msg="msg" :initial="false" />
		</div>
		<div class="techstack-section">
			<div
				class="techstack-title"
				v-motion
				:initial="{ opacity: 0, y: -100 }"
				:visibleOnce="{
					opacity: 1,
					y: 0,
					transitionDuration: '0.2s',
					transitionTimingFunction: 'linear',
				}"
				:delay="500"
			>
				Technologies Used<span>,</span>
			</div>
			<div
				class="icons-wrapper"
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
				<IconFileTypeReactts class="react" />
				<IconFileTypePython class="python" />
				<IconFileTypeFirebase class="firebase" />
				<IconFileTypeTailwind class="tailwind" />
				<IconFileTypeTypescriptOfficial class="typescript" />
				<IconFileTypeLightExpo class="expo" />
				<IconFileTypeVue class="vue" />
			</div>
		</div>
		<div class="developer-section">
			<DeveloperSection />
		</div>
		<div class="footnote">
			<FootNote />
		</div>
	</body>
</template>

<style scoped lang="scss">
body {
	display: flex;
	flex-direction: column;
	background-color: rgb(24 24 27); // bg-zinc-900
	color: whitesmoke;

	.title {
		font-size: 50px;
		height: 12rem;
		padding-right: 10px;
		text-align: center;
		justify-content: center;
		align-items: center;
		display: flex;
		font-weight: bold;
		user-select: none;

		.title-border {
			background-color: rgb(28, 28, 32);
			border-radius: 20px;
			border-width: 3px;
			padding: 10px 35px;
			box-shadow: 0 0 10px 0 rgb(32, 32, 32);
			transform: scale(1);
			transition: all 0.2s ease-out;

			&:hover {
				transform: scale(1.05);
				box-shadow: 0 0 20px 0 rgb(48, 48, 48);

				.title-vt {
					color: #e5751f;
				}

				.title-xi {
					color: #861f41;
				}
			}

			.title-vt {
				font-size: 20px;
				color: #861f41;
			}

			.title-xi {
				font-size: 20px;
				color: #e5751f;
			}
		}
	}

	.intro-section,
	.description-section,
	.slideshow-section,
	.techstack-section,
	.developer-section {
		width: 100%;
		padding: 4rem 5rem;
		font-weight: 100;
	}

	.intro-section {
	}

	.description-section {
		display: flex;
		flex-direction: column;
		justify-content: center;

		.description-header {
			font-size: 50px;
			font-weight: bold;
		}

		.description {
			display: flex;
			gap: 25px;
			width: 100%;
			h3 {
				font-size: 27.5px;
				width: 80%;
			}
			img {
				width: 500px;
				height: 400px;
			}
		}
	}

	.slideshow-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5rem;
		align-items: center;
	}

	.techstack-section {
		display: flex;
		gap: 10px;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.techstack-title {
			font-weight: bold;
			font-size: 40px;

			span {
				color: #ec625f;
				font-size: 60px;
			}
		}

		.icons-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;
			height: 142px;
			width: 100%;

			svg {
				width: 125px;
				height: 125px;
				padding: 10px;
				transform: scale(1);
				transition: transform 0.2s ease-in-out;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}

	.footnote {
		background-color: rgb(21, 21, 23);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 3.25rem;
	}
}
</style>
