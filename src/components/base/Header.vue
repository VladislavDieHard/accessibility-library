<template>
    <v-row class="header d-flex justify-center">
        <size-controls />
        <style-controls />
        <image-controls />
    </v-row>
</template>

<script setup>
import StyleControls from '@/components/controls/StyleControls.vue';
import SizeControls from '@/components/controls/SizeControls.vue';
import ImageControls from '@/components/controls/ImageControls.vue';
</script>

<style lang="scss" scoped>
@import '../../assets/content';

.content {
    @include content-width;
}

.checkbox {
    width: 200px;
}

.header {
    z-index: 2;
    position: fixed;
    background-color: white;
    height: 150px;
    margin: 0 0 30px;
    border-bottom: 2px solid;
    //padding: 0 200px;
    width: 100%;

    &--font-style {
        width: 400px;
    }
}
</style>
