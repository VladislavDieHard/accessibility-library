<template>
    <v-col md="3" class="size-controls d-flex flex-column align-center">
        <h3 class="size-controls--title title-color-exclude">Изображения</h3>
        <checkbox v-model="isImageBlack" class="ml-4">
            <span>Чёрно-белые изображения</span>
        </checkbox>
        <checkbox v-model="isImageShowed" class="ml-4">
            <span>Отображать изображения</span>
        </checkbox>
    </v-col>
</template>

<script setup>
import Checkbox from '@/components/base/Checkbox.vue';
import { onMounted, ref, watch } from 'vue';

const isImageShowed = ref(true);
const isImageBlack = ref(false);
const storage = window.localStorage;

watch(isImageShowed, value => {
    setShowImage(value);
    storage.setItem('image-showed', String(value));
});

watch(isImageBlack, value => {
    setImageBlack(value);
    storage.setItem('image-black', String(value));
});

const setShowImage = value => {
    if (!value) {
        document.body.classList.add('image-showed');
    } else {
        document.body.classList.remove('image-showed');
    }
};

const setImageBlack = value => {
    if (value) {
        document.body.classList.add('image-black');
    } else {
        document.body.classList.remove('image-black');
    }
};

onMounted(() => {
    const isVisible = storage.getItem('image-showed');
    const isBlack = storage.getItem('image-black');

    if (isBlack) {
        isImageBlack.value = isBlack === 'true';
    } else {
        isImageBlack.value = false;
    }

    if (isVisible) {
        isImageShowed.value = isVisible === 'true';
    } else {
        isImageShowed.value = true;
    }
});
</script>

<style lang="scss" scoped>
.size-controls {
    &--title {
        font-size: 1.5rem !important;
    }

    &--checkbox-container {
        display: flex;
        flex-direction: column;
    }
}

.checkbox-container {
    &--input {
        width: 20px;
        height: 20px;
        color: white !important;
        background-color: white !important;
    }

    &--describe {
    }
}
</style>
