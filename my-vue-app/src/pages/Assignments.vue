<template>
  <completed-assignment
    @toggleAssignment="toggleAssignment"
    :assignments="assignments"
  />
  <incompleted-assignment
    @toggleAssignment="toggleAssignment"
    :assignments="assignments"
  />
</template>

<script>
import CompletedAssignment from './ComputedAssignment.vue'
import IncompletedAssignment from './IncompletedAssignment.vue'
export default {
  components: { CompletedAssignment, IncompletedAssignment },
  name: 'Assignments',
  props: { assignments: Array },
  data() {
    return {
      assignments: [
        { name: 'Finish project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: false, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
      ],
    }
  },
  methods: {
    toggleAssignment(assignment) {
      this.assignments.forEach(assign, (index) => {
        if (assign.id == assignment.id) {
          this.assignments[index].complete = !this.assignments[index].complete
        }
      })
    },
  },
  computed: {},
}
</script>

<style></style>
