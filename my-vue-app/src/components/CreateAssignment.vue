<template>
  <div>
    <input
      type="text"
      name="assignment"
      id="assignment"
      placeholder="enter your assignment"
      v-model="assignmentText"
    />
    <input type="submit" value="Add" @click="addAssignment" />
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
      console.log('hj')
      this.$emit('addAssignment', this.assignmentText)
    },
  },
}
</script>

<style></style>
