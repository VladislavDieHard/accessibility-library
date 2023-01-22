<template>
    <div class="entries" ref="entryWrapper">
        <div v-if="isEntriesExists">
            <entry
                v-for="entry in entries"
                :entry="entry"
                :key="entry.id"
                class="entries--item"
            />
        </div>
        <div v-else class="loading">
            <v-row class="d-flex flex-column align-center">
                <h3>ЗАГРУЗКА...</h3>
                <loader />
            </v-row>
        </div>
    </div>
</template>

<script setup>
import Loader from '@/components/base/Loader.vue';
import Entry from '@/components/Entry.vue';
import throttle from 'lodash.throttle';
import {
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    ref,
    watch,
    computed,
} from 'vue';
import { getEntries } from '@/api/entry';

const props = defineProps({
    rubric: {
        type: String,
        required: true,
    },
});

const entryWrapper = ref();
const currentPage = ref(1);
const entries = ref([]);
const isEntriesExists = computed(() => !!entries.value.length);

watch(
    () => props.rubric,
    async (value, oldValue) => {
        if (value !== oldValue) {
            currentPage.value = 1;
            entries.value = [];
            await fetchEntries();
        }
    }
);

const checkPosition = () => {
    const entryWrapperPos = entryWrapper.value.getBoundingClientRect();

    if (window.innerHeight >= entryWrapperPos.bottom - 300) {
        fetchEntries();
    }
};

const fetchEntries = async () => {
    const { data } = await getEntries(props.rubric, {
        page: currentPage.value,
        include: 'preview',
        orderBy: '-publishedAt',
    });

    currentPage.value++;
    entries.value.push(...data);
};

const loadData = throttle(checkPosition, 250);

onMounted(() => {
    document.addEventListener('scroll', loadData);
    document.addEventListener('resize', loadData);
});

onBeforeMount(async () => {
    await fetchEntries();
});

onBeforeUnmount(() => {
    document.removeEventListener('scroll', loadData);
    document.removeEventListener('resize', loadData);
});
</script>

<style lang="scss" scoped>
.loading {
    margin-top: 300px;
}

.entries {
    margin-bottom: 60px;

    &--item {
        border-bottom: 2px solid;
        padding: 10px 0 20px 0;
    }
}
</style>
