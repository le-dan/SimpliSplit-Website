<script setup lang="ts">
const props = defineProps<{ img?: string, reverse?: true }>();
</script>

<template>

    <div v-if="reverse" class="card" v-motion :initial="{ opacity: 0, x: 100 }" :visibleOnce="{
        opacity: 1,
        x: 0,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
    }" :delay="800"></div>
    <div v-else class="card" v-motion :initial="{ opacity: 0, x: -100 }" :visibleOnce="{
        opacity: 1,
        x: 0,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
    }" :delay="800"></div>
</template>

<style scoped lang="scss">
.card {
    background-color: rgb(255, 255, 255);
    border-radius: 5%;
    width: 60rem;
    height: 40rem;
    box-shadow: 0 0 25px 0 rgb(111, 110, 110);
}
</style>