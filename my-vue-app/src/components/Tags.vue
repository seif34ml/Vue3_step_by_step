<template>
  <div class="flex justify-center gap-2 my-4 mb-8">
    <span
      :class="[
        { 'block p-2 border': true },
        { 'bg-blue-300': currentTag == tag },
      ]"
      v-for="(tag, index) in tags"
      :key="index"
      @click="$emit('update:currentTag', tag)"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, computed } from 'vue'

const props = defineProps({
  currentTag: String,
  assignments: Array as PropType<Array<any>>,
})

const tags = computed(() => [
  'all',
  ...new Set(props.assignments.map((a) => a.tag)),
])
</script>

<style></style>
