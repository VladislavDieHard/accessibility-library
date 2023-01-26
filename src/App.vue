<template>
    <div class="app-container black-yellow">
        <header-layout />
        <main class="content">
            <router-view v-slot="{ Component }">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
    </div>
</template>

<script setup>
import HeaderLayout from '@/components/base/Header.vue';
</script>

<style lang="scss" scoped>
@import 'assets/content';

.content {
    @include content-width;
    margin: 0 auto;
}
</style>
