<template>
  <v-col md="3">
    <h3 class="text-center">Цветовая схема</h3>
    <v-row class="mt-2 justify-center">
      <v-col md="2" class="mx-2 d-flex justify-center">
        <button
            class="style-control-btn style-choose-btn black-text"
            data-style-btn="white-black"
            @click="switchContentColor($event, 'white-black')"
        >
          A
        </button>
      </v-col>
      <v-col md="2" class="mx-2 d-flex justify-center">
        <button
            class="style-control-btn style-choose-btn white-text"
            data-style-btn="black-white"
            @click="switchContentColor($event, 'black-white')"
        >
          A
        </button>
      </v-col>
      <v-col md="2" class="mx-2 d-flex justify-center">
        <button
            class="style-control-btn style-choose-btn yellow-text"
            data-style-btn="black-yellow"
            @click="switchContentColor($event, 'black-yellow')"
        >
          A
        </button>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
import {onMounted} from "vue";

const switchContentColor = (event, value) => {
  const styleBtns = document.querySelectorAll('.style-choose-btn');

  styleBtns.forEach(styleBtn => {
    styleBtn.classList.remove('chosen');
  });

  event.target.classList.add('chosen');

  const bodyClasses = [];
  document.body.classList.forEach(item => {
    bodyClasses.push(item);
  });

  document.body.classList.remove(bodyClasses);
  document.body.classList.add(value);
  window.localStorage.setItem('window-style', value);
}

onMounted(() => {
  const styleMode = window.localStorage.getItem('window-style');

  document.querySelectorAll('.style-choose-btn').forEach((styleBtn => {
    const styleBtnId = styleBtn.getAttribute('data-style-btn');

    if (styleBtnId === styleMode) {
      styleBtn.classList.add('chosen');
    }
  }))
})
</script>

<style lang="scss" scoped>
.style-control-btn {
  min-width: 50px;
  padding: 2px 10px;
  min-height: 50px;
  border: 1px solid;
}

.black-text {
  color: black;
  background-color: white;
}

.white-text {
  color: white;
  background-color: black;
}

.yellow-text {
  color: yellow;
  background-color: black;
}
</style>