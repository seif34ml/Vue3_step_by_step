<template>
  <section class="border-2 border-black mt-4">
    <h1 class="mt-2 capitalize">{{ title }}</h1>
    <div
      class="w-1/4 mx-auto mt-4 border-2 border-dotted border-black divide-y mb-2"
    >
      <div
        v-for="assignment in getCompletedAssignments"
        class="flex justify-around items-center mx-1 py-2"
        :key="assignment.id"
      >
        <label @click="toggleAssignment(assignment)" :for="assignment.id">
          {{ assignment.title }}
        </label>
        <input
          class="cursor-pointer"
          type="checkbox"
          :name="assignment.title"
          :id="assignment.id"
          checked
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Completed-vue',
  props: {
    title: {
      type: String,
      required: true,
      validator: (title) => {
        return title == 'completed'
      },
    },
    assignments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleAssignment(assignment) {
      console.log('ghghg')
      this.$emit('toggleAssignment', assignment)
    },
  },
  computed: {
    getCompletedAssignments() {
      return this.assignments.filter((assignment) => {
        return assignment.completed
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
