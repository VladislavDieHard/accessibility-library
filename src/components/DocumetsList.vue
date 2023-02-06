<template>
    <div class="documents-list">
        <div
            class="documents-list--item"
            v-if="documentsExists"
            v-for="({ title, menuItems }, index) in documents"
            :key="index"
        >
            <h2 class="documents-list--item-title">{{ title }}</h2>
            <ol class="documents-list--item inner-list">
                <li
                    v-for="(menuItem, index) in menuItems"
                    :key="index"
                    class="inner-list--item"
                >
                    <p
                        class="document-item"
                        @click="handleGoToDocument(menuItem.slug)"
                    >
                        {{ menuItem.title }}
                    </p>
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { getDocumentsMenu } from '@/api/menu';
import { useRouter } from 'vue-router';

const router = useRouter();
const documents = ref([]);
const documentsExists = computed(
    () => documents.value && documents.value.length >= 1
);

const handleGoToDocument = slug => {
    router.push({ name: 'DocumentsDetail', params: { slug } });
};

onMounted(async () => {
    documents.value = await getDocumentsMenu();
});
</script>

<style lang="scss" scoped>
.document-item {
    display: inherit;
    cursor: pointer;
}

.documents-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    margin: 0 auto;

    &--item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto 40px;
    }

    &--item-title {
        display: inline-flex;
        text-align: center;
    }
}

.inner-list {
    list-style: none;
    margin: 0;

    &--item {
        text-align: center;
    }
}
</style>
