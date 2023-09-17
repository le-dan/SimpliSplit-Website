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
import { IconArrowDownLine } from "@iconify-prerendered/vue-mingcute";

function scrollToFirstSlideshowCard() {
	// Find the element with the id "firstSlideshowCard"
	const firstSlideshowCard = document.getElementById("firstSlideshowCard");
	const arrowElement = document.getElementById("arrow");
	// Check if the element exists
	if (firstSlideshowCard) {
		// Scroll to the element
		firstSlideshowCard.scrollIntoView({
			behavior: "smooth", // You can change this to "auto" for instant scrolling
			block: "start", // Scroll to the top of the element
		});

		if (arrowElement) {
			arrowElement.style.visibility = "hidden";
		}
	}
}
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
					:delay="1200"
				>
					About <Logo /><span>,</span>
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
					:delay="2000"
				>
					<h3>
						The purpose of the app is to simplify the process of
						splitting the bill in large groups. Instead of one
						person having to pay with his or her card and calculate
						individual shares, the app allows users to scan a
						restaurant receipt and send a payment request via text
						message with a single button.
					</h3>
					<h3>
						It eliminates the need to individually calculate the tax
						and tip and send Venmo or Zelle requests separately.
						Although restaurants have been allowing customers to pay
						separately, it makes the whole process very tedious for
						the employee and even more complicated.
					</h3>
				</div>
			</div>
			<div class="arrow">
				<IconArrowDownLine
					class="arrow-icon"
					v-motion
					:initial="{ opacity: 0 }"
					:enter="{
						opacity: 1,
						transitionDuration: '0.3s',
						transitionTimingFunction: 'linear',
					}"
					:delay="3000"
					@click="scrollToFirstSlideshowCard"
				/>
			</div>
		</div>

		<div class="slideshow-section">
			<SlideshowCard
				id="firstSlideshowCard"
				:img="'scan.gif'"
				:header="'Scan'"
				:msg="'Effortlessly scan and digitize your receipts with a simple snap of your camera'"
				:initial="true"
			/>
			<SlideshowCard
				:img="'split.gif'"
				:header="'Split'"
				:msg="'Organize items efficiently according to each individual\'s specific order'"
				:initial="false"
				reverse
			/>
			<SlideshowCard
				:img="'settle.gif'"
				:header="'Settle'"
				:msg="'Effortlessly send payment requests in bulk for the entire group with a single tap, utilizing SMS and Venmo redirects'"
				:initial="false"
			/>
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
				:delay="2000"
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
				:delay="2500"
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

	.intro-section,
	.description-section,
	.slideshow-section,
	.techstack-section,
	.developer-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 3.5rem 5rem;
		font-weight: 100;
	}

	.intro-section {
		.title {
			font-size: 50px;
			padding: 10px;
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

		.description-section {
			gap: 20px;
			.description-header {
				font-size: 45px;
				font-weight: bold;

				span {
					color: #ec625f;
				}
			}

			.description {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 25px;
				width: 100%;
				h3 {
					font-size: 25px;
					width: 80%;
				}
				img {
					width: 500px;
					height: 400px;
				}
			}
		}

		.arrow {
			height: 60px;
			width: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			.arrow-icon {
				height: 90%;
				width: 90%;
				border-radius: 30px;
				border-style: solid;
				border-color: white;
				border-width: 2px;
				padding: 3px;

				transition: all 0.2s ease-in-out;
				&:hover {
					color: #ec625f;
					border-color: #ec625f;
					cursor: pointer;
					transform: scale(1.1);
				}
			}
		}
	}

	.slideshow-section {
		gap: 5rem;
	}

	.techstack-section {
		justify-content: space-between;
		gap: 20px;
		.techstack-title {
			font-weight: bold;
			font-size: 40px;

			span {
				color: #ec625f;
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

	.developer-section {
		gap: 20px;
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
