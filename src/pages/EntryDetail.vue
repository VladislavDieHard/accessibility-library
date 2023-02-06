<template>
    <v-container class="entry-container">
        <div class="entry-container--content">
            <div class="entry-container--publish entry-content">
                {{ entryDate }}
            </div>
            <button class="btn py-2 px-6 mb-4" @click="handleBackHome">
                {{ '< Назад' }}
            </button>
            <h2>{{ entry.title }}</h2>
            <div
                class="entry-content mt-4 ck-content"
                v-html="entry.content"
            ></div>
        </div>
    </v-container>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, onBeforeMount, ref } from 'vue';
import { getEntry } from '@/api/entry';
import moment from 'moment';
import { useTitle } from '@vueuse/core';

const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug);
const entry = ref({});
const entryDate = computed(() =>
    moment(new Date(entry.value.publishedAt)).format('Дата: DD.MM.YYYY')
);

const handleBackHome = () => {
    router.push('/');
};

onBeforeMount(async () => {
    entry.value = await getEntry(slug.value, {});
    useTitle(`НОМБ - ${entry.value.title}`);
});
</script>

<style lang="scss" scoped>
.entry-container {
    position: relative;

    &--content {
        margin-top: 150px;
    }

    &--publish {
        position: absolute;
        right: 15px;
        top: 185px;
    }
}
</style>
