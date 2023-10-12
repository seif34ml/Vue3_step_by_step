<template>
  <div class="flex flex-col items-start py-4 border mt-4 px-2">
    <span>Add new Task</span>
    <input
      placeholder="type new assignment"
      @input="$emit('update:assignmentText', $event.target.value)"
      :value="assignmentText"
      type="text"
      name="assign"
      id="assign"
      class="border rounded-md"
    />
    <div class="flex my-2">
      <input
        class="border rounded-md mr-2"
        @input="$emit('update:tag', $event.target.value)"
        :value="tag"
        type="text "
        name="tag"
        id="tag"
      />
      <input
        type="checkbox"
        name="completed"
        id="completed"
        @input="$emit('update:completed', $event.target.value)"
        :checked="completed"
      />
    </div>
    <input
      type="submit"
      @click="$emit('addAssignment')"
      value="add"
      class="bg-blue-500 text-white py-2 px-4 cursor-pointer"
      :disabled="tag == '' || assignmentText == ''"
      :class="{ 'bg-gray-500': tag == '' || assignmentText == '' }"
    />
  </div>
</template>

<script>
export default {
  name: 'NewAssignmentForm',
  props: {
    assignmentText: {
      type: String,
    },
    tag: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
  },
}
</script>

<style></style>
