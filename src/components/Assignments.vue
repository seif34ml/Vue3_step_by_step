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

    <div class="flex flex-col items-start py-4 border mt-4 px-2">
      <span>Add new Task</span>
      <input
        placeholder="type new assignment"
        v-model="assignmentText"
        type="text"
        name="assign"
        id="assign"
        class="border rounded-md"
      />
      <div class="flex my-2">
        <input
          class="border rounded-md mr-2"
          type="text "
          name="tag"
          id="tag"
          v-model="tag"
        />
        <input
          type="checkbox"
          name="completed"
          id="completed"
          v-model="completed"
        />
      </div>
      <input
        type="submit"
        @click="addAssignment"
        value="add"
        class="bg-blue-500 text-white py-2 px-4 cursor-pointer"
        :disabled="tag == '' || assignmentText == ''"
        :class="{ 'bg-gray-500': tag == '' || assignmentText == '' }"
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
      tag: '',
      assignmentText: '',
      completed: false,
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
    addAssignment() {
      this.assignments.push({
        id: this.assignments.length + 1,
        title: this.assignmentText,
        completed: this.completed,
        tag: this.tag,
      })
      this.tag = ''
      this.assignmentText = ''
      this.completed = false
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
