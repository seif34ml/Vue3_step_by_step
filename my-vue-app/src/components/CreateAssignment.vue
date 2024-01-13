<template>
  <div>
    <input
      type="text"
      name="assignment"
      id="assignment"
      placeholder="enter your assignment"
      v-model="data.assignmentText"
    />
    <input type="submit" value="Add" @click="addAssignment" />
  </div>
</template>

<script setup lang="ts">
import { PropType, reactive, ref } from 'vue'

const data = reactive({
  assignmentText: '',
})

const emit = defineEmits(['addAssignment'])
const addAssignment = () => {
  console.log('hj')
  emit('addAssignment', data.assignmentText)
}
</script>

<style></style>
