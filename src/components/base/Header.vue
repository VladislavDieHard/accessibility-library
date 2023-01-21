<template>
  <v-row class="header d-flex justify-center">
    <v-col md="3" class="">
      <h3 class="text-center">Размер шрифта</h3>
      <v-row class="mt-2 justify-center">
        <v-col md="2" class="mx-2 d-flex justify-center">
          <button class="btn header--font-style-btn small-text">
            A
          </button>
        </v-col>
        <v-col md="2" class="mx-2 d-flex justify-center">
          <button class="btn header--font-style-btn medium-text">
            A
          </button>
        </v-col>
        <v-col md="2" class="mx-2 d-flex justify-center">
          <button class="btn header--font-style-btn large-text">
            A
          </button>
        </v-col>
      </v-row>
    </v-col>
    <style-controls />
    <v-col md="3">
      <h3>
        Изображения
      </h3>
      <v-row class="d-flex flex-column py-8">
        <v-col md="4" class="py-0 checkbox">
          <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark ml-2">One</span>
          </label>
        </v-col>
        <v-col md="4" class="py-0 checkbox">
          <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark ml-2">Отображать изображения</span>
          </label>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import StyleControls from '@/components/StyleControls.vue'
</script>

<style lang="scss" scoped>
@import '../../assets/content';
@import '../../assets/checkbox';

.small-text {
  font-size: 0.8rem;
}

.medium-text {
  font-size: 1rem;
}

.large-text {
  font-size: 1.5rem;
}

.content {
  @include content-width;
}

.checkbox {
  width: 200px;
}

.header {
  z-index: 2;
  position: fixed;
  background-color: white;
  height: 150px;
  margin: 0 0 30px;
  border-bottom: 2px solid;
  //padding: 0 200px;
  width: 100%;

  &--font-style {
    width: 400px;
  }
}
</style>