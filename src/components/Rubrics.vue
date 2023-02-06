<template>
    <div class="rubrics w-100 d-flex">
        <v-row>
            <v-col
                v-for="rubric in rubrics"
                md="4"
                class="d-flex justify-center"
            >
                <button
                    :class="['btn py-2 px-6', { chosen: rubric.isActive }]"
                    @click="handleChooseRubric(rubric.value)"
                >
                    {{ rubric.title }}
                </button>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
        type: String,
        required: false,
    },
});

const rubrics = ref([
    {
        title: 'Актуальное',
        value: 'aktualnoe',
        isActive: true,
    },
    {
        title: 'Анонсы',
        value: 'anonsy',
        isActive: false,
    },
    {
        title: 'События',
        value: 'sobytiya',
        isActive: false,
    },
]);

watch(rubrics, value => {
    const result = value.find(({ isActive }) => isActive).value;
    emit('update:modelValue', result);
});

watch(
    () => props.modelValue,
    value => {
        setActiveRubric(value);
    }
);

const setActiveRubric = value => {
    rubrics.value = rubrics.value.map(rubric => {
        const newVal = { ...rubric };

        newVal.isActive = newVal.value === value;

        return newVal;
    });
};

const handleChooseRubric = value => {
    setActiveRubric(value);
};
</script>

<style lang="scss" scoped>
.rubrics {
    width: 60%;

    &--list {
        display: flex;
        justify-content: space-between;
        list-style: none;
    }

    &--list-item {
        font-size: 25px;
    }
}
</style>
