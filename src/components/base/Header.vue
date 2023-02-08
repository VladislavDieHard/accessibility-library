<template>
    <v-row class="header d-flex justify-center">
        <a :href="mainSiteUrl">
          <button class="header--back-btn">
            <arrow-left width="25px" height="25px" />
          </button>
        </a>
        <size-controls />
        <style-controls />
        <image-controls />
    </v-row>
</template>

<script setup>
import StyleControls from '@/components/controls/StyleControls.vue';
import SizeControls from '@/components/controls/SizeControls.vue';
import ImageControls from '@/components/controls/ImageControls.vue';

const mainSiteUrl = import.meta.env['MAIN_SITE_URL'] || 'http://dev.infomania.ru';
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
    width: 100%;

    &--back-btn {
        position: absolute;
        display: flex;
        align-items: center;
        padding: 10px;
        top: 10px;
        left: 10px;
    }

    &--font-style {
        width: 400px;
    }
}
</style>
