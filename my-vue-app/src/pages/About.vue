<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>about page message: {{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
