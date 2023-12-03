<template>
  <section v-show="inProgressAssignments.length">
    <!-- using v-show that dynamically test the v-show if true then display -->
    <h2 class="font-bold mb-2">In Progress</h2>

    <ul>
      <li v-for="assignment in inProgressAssignments" :key="assignment.id">
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
  name: 'incompletedAssignment',
  props: { assignments: Array },
  methods: {
    toggleAssignment(assignment) {
      this.$emit('toggleAssignment', assignment)
    },
  },
  computed: {
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete)
    },
  },
}
</script>

<style></style>
