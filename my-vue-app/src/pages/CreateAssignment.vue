<template>
  <div>
    <form action="submit">
      <input
        type="text"
        name="assignment"
        id="assignment"
        placeholder="enter your assignment"
        v-model="assignmentText"
      />
      <input type="submit" value="Add" @submit.prevent="addAssignment" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateAssignment',
  data() {
    return {
      assignmentText: '',
    }
  },

  methods: {
    addAssignment() {
      this.$emit('addAssignment', this.assignmentText)
    },
  },
}
</script>

<style></style>
