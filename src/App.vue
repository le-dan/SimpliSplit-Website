<script setup lang="ts">

</script>

<template>
        <div class="wrapper">
                <Router-view />
        </div>
</template>

<style lang="scss">
* {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        box-sizing: border-box;
        font-family: "Roboto", Arial, sans-serif;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
                display: none;
        }
}
</style>
