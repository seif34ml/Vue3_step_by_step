<template>
  <completed-assignment
    @toggleAssignment="toggleAssignment"
    :assignments="assignments"
  />
  <incompleted-assignment
    @toggleAssignment="toggleAssignment"
    :assignments="assignments"
  />
  <create-assignment @addAssignment="addAssignment" />
</template>

<script>
import CompletedAssignment from '../components/CompletedAssignment.vue'
import CreateAssignment from '../components/CreateAssignment.vue'
import IncompletedAssignment from '../components/IncompletedAssignment.vue'
export default {
  components: { CompletedAssignment, IncompletedAssignment, CreateAssignment },
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
    addAssignment(name) {
      this.assignments.push({
        name: name,
        id: this.assignments.length + 1,
        complete: false,
      })
    },
  },
  computed: {},
}
</script>

<style></style>
