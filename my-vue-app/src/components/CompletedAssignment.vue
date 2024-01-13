<template>
  <section>
    <Tags v-model:currentTag="data.currentTag" :assignments="assignments" />
    <!-- using v-show that dynamically test the v-show if true then display -->
    <slot />
    <ul class="mb-4">
      <li
        class="flex flex-wrap justify-between w-full"
        v-for="assignment in getFilteredAssignment"
        :key="assignment.id"
      >
        <!-- using v-for as to loop over an array creating ui for any looped data -->
        <label class="w-[150px] inline-block">
          {{ assignment.name }}
        </label>
        <input
          @click="$emit('toggleAssignment', assignment)"
          type="checkbox"
          v-model="assignment.complete"
        />
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
import Tags from './Tags.vue'

const props = defineProps(['assignments'])

const data = ref({
  currentTag: 'all',
})

const tags = computed(() => [
  'all',
  ...new Set(props.assignments.map((a: any) => a.tag)),
])

const getFilteredAssignment = computed(() => {
  if (data.value.currentTag === 'all') {
    return props.assignments
  } else {
    const filteredAssignments = props.assignments.filter((assignment: any) => {
      return assignment.tag === data.value.currentTag
    })

    if (filteredAssignments.length > 0) {
      return filteredAssignments
    } else {
      data.value.currentTag = 'all'
      return props.assignments
    }
  }
})
</script>

<style></style>
