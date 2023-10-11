<template>
  <div class="flex flex-wrap m-4">
    <button
      class="mx-2 p-1 rounded-full border"
      v-for="(tag, index) in tags"
      @click="$emit('setTag', tag)"
      :key="index"
      :class="{ 'bg-blue-300 text-white': selectedTags.includes(tag) }"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TagButton',
  props: {
    tags: { type: Array },
    selectedTags: { type: Array },
  },
}
</script>

<style></style>
