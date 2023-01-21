<template>
  <div>
    <h3 class="mb-2">{{ entry.title }}</h3>
    <div v-html="entry.desc"></div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  entry: {
    type: Object,
    required: true,
  }
});

const entry = computed(() => props.entry);
</script>