<template>
    <v-col md="3" class="style-controls">
        <h3 class="text-center style-controls--title">Цветовая схема</h3>
        <v-row class="mt-2 justify-center">
            <v-col md="2" class="mx-2 d-flex justify-center">
                <button
                    class="style-control-btn white-black-btn"
                    @click="handleChooseStyle($event, 'white-black')"
                >
                    A
                </button>
            </v-col>
            <v-col md="2" class="mx-2 d-flex justify-center">
                <button
                    class="style-control-btn black-white-btn"
                    @click="handleChooseStyle($event, 'black-white')"
                >
                    A
                </button>
            </v-col>
            <v-col md="2" class="mx-2 d-flex justify-center">
                <button
                    class="style-control-btn black-yellow-btn"
                    @click="handleChooseStyle($event, 'black-yellow')"
                >
                    A
                </button>
            </v-col>
        </v-row>
    </v-col>
</template>

<script setup>
import { onMounted } from 'vue';

const handleChooseStyle = (event, value) => {
    const btns = document.querySelectorAll('.style-control-btn');
    btns.forEach(btn => {
        btn.classList.remove('chosen');
    });

    event.target.classList.add('chosen');
    const textSize = window.localStorage.getItem('window-style');

    if (textSize) {
        document.body.classList.remove(textSize);
    }

    window.localStorage.setItem('window-style', value);
    document.body.classList.add(value);
};

onMounted(() => {
    const textStyle = window.localStorage.getItem('window-style');

    if (textStyle) {
        document.body.classList.add(textStyle);
        document.querySelector(`.${textStyle}-btn`).classList.add('chosen');
    } else {
        document.body.classList.add('white-black');
        document.querySelector('.white-black-btn').classList.add('chosen');
        window.localStorage.setItem('window-style', 'white-black');
    }
});
</script>

<style lang="scss" scoped>
.style-controls {
    &--title {
        font-size: 1.5rem !important;
    }
}

.style-control-btn {
    min-width: 50px;
    padding: 2px 10px;
    min-height: 50px;
    border: 2px solid;
}

.white-black-btn {
    color: black;
    background-color: white;
}

.black-white-btn {
    color: white;
    background-color: black;
}

.black-yellow-btn {
    color: yellow;
    background-color: black;
}
</style>
