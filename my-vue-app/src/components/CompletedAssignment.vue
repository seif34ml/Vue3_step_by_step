<template>
  <section v-show="assignments.length">
    <Tags
      @change="currentTag = tag"
      :currentTag="currentTag"
      :assignments="assignments"
    />
    <!-- using v-show that dynamically test the v-show if true then display -->
    <h2 class="font-bold mb-2">In Progress</h2>

    <ul class="mb-4">
      <li v-for="assignment in getFilteredAssignment" :key="assignment.id">
        <!-- using v-for as to loop over an array creating ui for any looped data -->
        <label>
          {{ assignment.name }}

          <input
            @click="$emit('toggleAssignment', assignment)"
            type="checkbox"
            v-model="assignment.complete"
          />
        </label>
      </li>
    </ul>
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
        return this.assignments.filter((assignment) => {
          if (assignment.tag === this.currentTag) {
            return true
          }
        })
      }
    },
  },
}
</script>

<style></style>
