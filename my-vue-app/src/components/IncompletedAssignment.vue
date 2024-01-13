<template>
  <section>
    <Tags v-model:currentTag="data.currentTag" :assignments="assignments" />
    <!-- using v-show that dynamically test the v-show if true then display -->
    <slot />

    <ul class="mb-4">
      <li
        class="flex justify-between items-center"
        v-for="assignment in getFilteredAssignment"
        :key="assignment.id"
      >
        <!-- using v-for as to loop over an array creating ui for any looped data -->
        <label class="w-[250px] inline-block">
          {{ assignment.name }}
        </label>
        <input
          @click="$emit('toggleAssignment', assignment)"
          type="checkbox"
          v-model="assignment.complete"
        />
      </li>
    </ul>
    <slot name="create-assignment"></slot>
  </section>
</template>

<script setup lang="ts">
import { computed, PropType, reactive } from 'vue'
import Tags from './Tags.vue'

const props = defineProps({
  assignments: Array as PropType<Array<any>>,
})

const data = reactive({
  currentTag: 'all',
})

const tags = computed(() => [
  'all',
  ...new Set(props.assignments.map((a) => a.tag)),
])

const getFilteredAssignment = computed(() => {
  if (data.currentTag === 'all') {
    return props.assignments
  } else {
    const filteredAssignments = props.assignments.filter((assignment) => {
      return assignment.tag === data.currentTag
    })

    if (filteredAssignments.length > 0) {
      return filteredAssignments
    } else {
      data.currentTag = 'all'
      return props.assignments
    }
  }
})
</script>
<style></style>
