<template>
  <section class="">
    <h1>assignments</h1>
    <div>
      <Inprogress
        @toggleAssignment="toggleAssignment"
        :assignments="assignments"
        :title="'in progress'"
      />
      <Completed
        @toggleAssignment="toggleAssignment"
        :assignments="assignments"
        :title="'completed'"
      />
    </div>
  </section>
</template>
<script>
import Completed from './Completed.vue'
import Inprogress from './Inprogress.vue'

export default {
  name: 'Assignments-vue',
  components: { Inprogress, Completed },
  data() {
    return {
      assignments: [
        { id: 1, title: 'wake up', completed: true, tag: 'personal' },
        { id: 2, title: 'do sports', completed: true, tag: 'work' },
        { id: 3, title: 'do homework', completed: true, tag: 'science' },
        { id: 4, title: 'do homework search', completed: true, tag: 'science' },
      ],
    }
  },
  methods: {
    toggleAssignment(assignment) {
      this.assignments.forEach((assign, index) => {
        if (assign.id == assignment.id) {
          console.log(index)
          this.assignments[index].completed = !this.assignments[index].completed
        }
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
