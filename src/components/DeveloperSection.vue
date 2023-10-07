<script setup lang="ts"></script>

<template>
        <div class="developer-title" v-motion :initial="{ opacity: 0, y: -100 }" :visibleOnce="{
                opacity: 1,
                y: 0,
                transitionDuration: '0.2s',
                transitionTimingFunction: 'linear',
        }" :delay="1000">
                Developed by<span>,</span>
        </div>
        <div class="developer-container" v-motion :initial="{ opacity: 0, y: -100 }" :visibleOnce="{
                opacity: 1,
                y: 0,
                transitionDuration: '0.2s',
                transitionTimingFunction: 'linear',
        }" :delay="1500">
                <div class="developer">
                        <a href="" target="_blank">
                                <div class="circle"><img src="../assets/minsung.png" /></div>
                        </a>
                        <span class="name"> Minsung Kim</span>
                </div>
                <div class="developer">
                        <a href="" target="_blank">
                                <div class="circle"><img src="../assets/dan.jpg" /></div>
                        </a>
                        <span class="name"> Dan Le</span>
                </div>
        </div>
</template>

<style scoped lang="scss">
.developer-container {
        display: flex;
        justify-content: center;
        gap: 3rem;
        align-items: center;
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

        span {
                color: #ec625f;
        }
}
</style>
