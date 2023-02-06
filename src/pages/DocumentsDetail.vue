<template>
    <v-container class="document-container">
        <div class="document-container--content">
            <button class="btn py-2 px-6 mb-4" @click="handleBackDocumentsHome">
                {{ '< Назад' }}
            </button>
            <div v-if="document">
                <h2>{{ document.title }}</h2>
                <div
                    class="entry-content mt-4 ck-content"
                    v-html="document.content"
                />
            </div>
            <div v-else>
                <h2>В разработке 🔧</h2>
            </div>
        </div>
    </v-container>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { getDocument } from '@/api/document';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug);
const document = ref({});

const handleBackDocumentsHome = () => {
    router.push({ name: 'Documents' });
};

onMounted(async () => {
    document.value = await getDocument(slug.value);
});
</script>

<style lang="scss" scoped>
.document-container {
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
