<template>
    <div>
        <h2 class="text-3xl font-bold underline">MainPage</h2>
        <div v-for="{ id, title } in entries" :key="id">
            {{ title }}
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getEntries } from '@/api/entry';

const entries = ref({});

onMounted(async () => {
    const { data } = await getEntries();

    entries.value = data;
});
</script>
