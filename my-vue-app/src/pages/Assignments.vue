<template>
  <div class="flex justify-between w-full px-[20%]">
    <incompleted-assignment
      @toggleAssignment="toggleAssignment"
      :assignments="
        data.assignments.filter((assignment) => !assignment.complete)
      "
      class="w-1/2 flex flex-col justify-start items-center border border-gray rounded-lg mr-5"
    >
      <h2 class="font-bold mb-4">InComplete</h2>
      <template #create-assignment>
        <!--named slot -->
        <create-assignment
          class="my-4 border border-gray py-2 px-4"
          @addAssignment="addAssignment"
        />
      </template>
    </incompleted-assignment>

    <completed-assignment
      @toggleAssignment="toggleAssignment"
      :assignments="
        data.assignments.filter((assignment) => assignment.complete)
      "
      class="w-1/2 flex flex-col justify-start items-center border border-gray rounded-lg"
    >
      <h2 class="font-bold mb-4">completed</h2>
    </completed-assignment>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import CompletedAssignment from '../components/CompletedAssignment.vue'
import CreateAssignment from '../components/CreateAssignment.vue'
import IncompletedAssignment from '../components/IncompletedAssignment.vue'

const data = reactive({
  assignments: [],
})

onMounted(async () => {
  await fetchAssignments()
})

const fetchAssignments = async () => {
  try {
    const response = await fetch(
      'https://65a27ee042ecd7d7f0a7b641.mockapi.io/Vue3/assignments',
    )

    if (!response.ok) {
      throw new Error('Failed to fetch assignments')
    }

    const responseData = await response.json()
    data.assignments = responseData
    console.log(data.assignments)
  } catch (error) {
    console.error('Error fetching assignments:', error)
  }
}

const toggleAssignment = (assignment) => {
  console.log(assignment, data.assignments)
  data.assignments.forEach((assign, index) => {
    if (assign.id === assignment.id) {
      data.assignments[index].complete = !data.assignments[index].complete
    }
  })
}

const addAssignment = async (name) => {
  const assignment = {
    name: name,
    id: data.assignments.length + 1,
    complete: false,
  }

  try {
    const response = await fetch(
      'https://65a27ee042ecd7d7f0a7b641.mockapi.io/Vue3/assignments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assignment),
      },
    )

    if (!response.ok) {
      throw new Error('Failed to add assignment')
    }

    const responseData = await response.json()
    console.log('Assignment added:', responseData)
    fetchAssignments()
    // Handle the response data as needed
  } catch (error) {
    console.error('Error adding assignment:', error)
  }
}
</script>

<style></style>
