<template>
  <section class="border-2 border-black mt-4">
    <h1 class="mt-2 capitalize">{{ title }}</h1>
    <div
      class="w-1/4 mx-auto mt-4 border-2 border-dotted border-black divide-y mb-2"
    >
      <div
        v-for="assignment in getProgressAssignments"
        class="flex justify-around items-center mx-1 py-2"
        :key="assignment.id"
      >
        <span>{{ assignment.title }}</span>
        <input
          class="cursor-pointer"
          type="checkbox"
          :name="assignment.title"
          :id="assignment.id"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Inprogress-vue',
  props: {
    title: {
      type: String,
      required: true,
      validator: (title) => {
        return title == 'in progress'
      },
    },
    assignments: {
      type: Array,
      required: true,
    },
  },

  computed: {
    getProgressAssignments() {
      return this.assignments.filter((assignment) => {
        return !assignment.completed
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
