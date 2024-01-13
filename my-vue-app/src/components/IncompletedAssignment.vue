<template>
  <section>
    <Tags v-model:currentTag="currentTag" :assignments="assignments" />
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

<script>
import Tags from './Tags.vue'
export default {
  name: 'incompletedAssignment',
  components: { Tags },
  props: { assignments: Array },
  data() {
    return {
      currentTag: 'all',
    }
  },
  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map((a) => a.tag))]
    },
    getFilteredAssignment() {
      if (this.currentTag == 'all') {
        return this.assignments
      } else {
        if (
          this.assignments.filter((assignment) => {
            if (assignment.tag === this.currentTag) {
              return true
            }
          }).length > 0
        ) {
          return this.assignments.filter((assignment) => {
            if (assignment.tag === this.currentTag) {
              return true
            }
          })
        } else {
          this.currentTag = 'all'
          return this.assignments
        }
      }
    },
  },
}
</script>

<style></style>
