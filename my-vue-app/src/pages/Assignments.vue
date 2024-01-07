<template>
  <incompleted-assignment
    @toggleAssignment="toggleAssignment"
    :assignments="assignments.filter((assignment) => !assignment.complete)"
  />
  <completed-assignment
    @toggleAssignment="toggleAssignment"
    :assignments="assignments.filter((assignment) => assignment.complete)"
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
        { name: 'Finish project', complete: false, id: 1, tag: 'math' },
        { name: 'Read Chapter 4', complete: false, id: 2, tag: 'science' },
        { name: 'Turn in Homework', complete: false, id: 3, tag: 'randoms' },
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
