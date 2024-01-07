<template>
  <div class="flex justify-center gap-2 my-4">
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

<script>
export default {
  props: {
    currentTag: String,
    assignments: Array,
  },
  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map((a) => a.tag))]
    },
  },
}
</script>

<style></style>
