<template>
  <section v-show="assignments.length">
    <div class="flex justify-center gap-2 my-4">
      <span
        :class="[
          { 'block p-2 border': true },
          { 'bg-blue-300': currenTag == tag },
        ]"
        v-for="(tag, index) in tags"
        :key="index"
        @click="currenTag = tag"
      >
        {{ tag }}
      </span>
    </div>
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
export default {
  name: 'incompletedAssignment',
  props: { assignments: Array },
  data() {
    return {
      currenTag: 'all',
    }
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map((a) => a.tag))]
    },
    getFilteredAssignment() {
      if (this.currenTag == 'all') {
        return this.assignments
      } else {
        return this.assignments.filter((assignment) => {
          if (assignment.tag === this.currenTag) {
            return true
          }
        })
      }
    },
  },
}
</script>

<style></style>
