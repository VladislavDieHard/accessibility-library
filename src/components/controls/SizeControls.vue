<template>
    <v-col md="3" class="size-control">
        <h3 class="text-center size-control--title">Размер шрифта</h3>
        <v-row class="mt-2 justify-center">
            <v-col md="2" class="mx-2 d-flex justify-center">
                <button
                    class="size-control-btn small-text-btn"
                    @click="handleChooseSize($event, 'small-text')"
                >
                    A
                </button>
            </v-col>
            <v-col md="2" class="mx-2 d-flex justify-center">
                <button
                    class="size-control-btn medium-text-btn"
                    @click="handleChooseSize($event, 'medium-text')"
                >
                    A
                </button>
            </v-col>
            <v-col md="2" class="mx-2 d-flex justify-center">
                <button
                    class="size-control-btn large-text-btn"
                    @click="handleChooseSize($event, 'large-text')"
                >
                    A
                </button>
            </v-col>
        </v-row>
    </v-col>
</template>

<script setup>
import { onMounted } from 'vue';

const handleChooseSize = (event, value) => {
    const target = event.target;
    const btns = document.querySelectorAll('.size-control-btn');
    btns.forEach(btn => {
        btn.classList.remove('chosen');
    });

    target.classList.add('chosen');
    const textSize = window.localStorage.getItem('window-text-size');

    if (textSize) {
        document.body.classList.remove(textSize);
    }

    window.localStorage.setItem('window-text-size', value);
    document.body.classList.add(value);
};

onMounted(() => {
    const textSize = window.localStorage.getItem('window-text-size');

    if (textSize) {
        document.body.classList.add(textSize);
        document.querySelector(`.${textSize}-btn`).classList.add('chosen');
    } else {
        document.body.classList.add('small-text');
        document.querySelector('.small-text-btn').classList.add('chosen');
        window.localStorage.setItem('window-text-size', 'small-text');
    }
});
</script>

<style lang="scss" scoped>
.size-control {
    &--title {
        font-size: 1.5rem !important;
    }
}

.size-control-btn {
    min-width: 50px;
    padding: 2px 10px;
    min-height: 50px;
    border: 2px solid;
}

.small-text-btn {
    font-size: 0.8rem;
}

.medium-text-btn {
    font-size: 1rem;
}

.large-text-btn {
    font-size: 1.5rem;
}
</style>
