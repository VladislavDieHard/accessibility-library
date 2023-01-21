<template>
    <div class="entry-container">
        <div class="entry-container--img-container switch-image">
            <img :src="image" alt="" v-if="!!image" />
            <img src="@/assets/images/base-img.svg" alt="" v-else />
        </div>
        <div class="entry-container--content">
            <router-link :to="`/entry/${entry.slug}`">
                <h3 class="mb-2">{{ entry.title }}</h3>
            </router-link>
            <div v-html="entry.desc" class="entry-content"></div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    entry: {
        type: Object,
        required: true,
    },
});

const image = computed(() => entry.value.preview?.path);
const entry = computed(() => props.entry);
</script>

<style lang="scss" scoped>
.entry-container {
    display: flex;
    justify-content: space-between;

    &--img-container {
        width: 250px;
        margin-right: 20px;

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    &--content {
        width: 100%;
    }
}
</style>
