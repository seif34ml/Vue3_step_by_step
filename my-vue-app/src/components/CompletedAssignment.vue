<template>
  <section v-show="completedAssignments.length">
    <!-- using v-show that dynamically test the v-show if true then display -->
    <h2 class="font-bold mb-2">completed</h2>

    <ul>
      <li v-for="assignment in completedAssignments" :key="assignment.id">
        <!-- using v-for as to loop over an array creating ui for any looped data -->
        <label>
          {{ assignment.name }}

          <input
            @click="toggleAssignment(assignment)"
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
  name: 'CompletedAssignment',
  props: { assignments: Array },
  methods: {
    toggleAssignment(assignment) {
      this.$emit('toggleAssignment', assignment)
    },
  },
  computed: {
    completedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete)
    },
  },
}
</script>

<style></style>
