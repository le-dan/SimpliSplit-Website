<script setup lang="ts">
const props = defineProps<{ msg: string, reverse: boolean }>();
</script>
<template>
    <div v-if="reverse" class="card-info" v-motion :initial="{ opacity: 0, x: -100 }" :visibleOnce="{
        opacity: 1,
        x: 0,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
    }">
        {{ props.msg }}
    </div>
    <div v-else class="card-info" v-motion :initial="{ opacity: 0, x: 100 }" :visibleOnce="{
        opacity: 1,
        x: 0,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
    }">
        {{ props.msg }}
    </div>
</template>

<style scoped lang="scss"></style>