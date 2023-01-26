<template>
    <div class="home">
        <v-container class="home--content">
            <v-row>
                <v-col>
                    <h1 class="underline">Новости</h1>
                </v-col>
                <v-col class="d-flex justify-end">
                    <router-link to="/documents" class="d-flex align-center">
                        <h1 class="mr-2 u">Документы</h1>
                        <arrow-right class="mt-1" width="25px" height="25px" />
                    </router-link>
                </v-col>
            </v-row>
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
