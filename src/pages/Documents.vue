<template>
    <div class="documents-container">
        <v-container class="documents-container--content">
            <v-row>
                <v-col class="d-flex">
                    <router-link to="/" class="d-flex align-center">
                        <arrow-left width="25px" height="25px" />
                        <h1 class="ml-2 text-decoration-none">Новости</h1>
                    </router-link>
                </v-col>
                <v-col class="d-flex justify-end">
                    <h1 class="text-decoration-underline">Документы</h1>
                </v-col>
            </v-row>
            <div class="v-divider mt-4 mb-6"></div>
            <documents-list />
        </v-container>
    </div>
</template>

<script setup>
import DocumentsList from '@/components/DocumetsList.vue';
import { useTitle } from '@vueuse/core';

useTitle('НОМБ - Версия сайта с улучшенной доступностью - ДОКУМЕНТЫ');
</script>

<style lang="scss" scoped>
.documents-container {
    display: flex;
    flex-direction: column;

    &--content {
        margin-top: 150px;
    }
}
</style>
