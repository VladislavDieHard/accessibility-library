<template>
    <div class="home">
        <v-container class="home--content">
            <h1>Новости</h1>
            <div class="v-divider mt-4 mb-6"></div>
            <rubrics class="mb-4" v-model="rubric" />
            <entries :rubric="rubric" />
        </v-container>
    </div>
</template>

<script setup>
import Rubrics from '@/components/Rubrics.vue';
import Entries from '@/components/Entries.vue';
import { ref } from 'vue';

const rubric = ref('aktualnoe');
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;

    &--content {
        margin-top: 150px;
    }

    &--rubrics {
        margin-bottom: 40px;
    }
}
</style>
