<template>
  <div class="flex justify-between w-full px-[20%]">
    <incompleted-assignment
      @toggleAssignment="toggleAssignment"
      :assignments="assignments.filter((assignment) => !assignment.complete)"
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
      :assignments="assignments.filter((assignment) => assignment.complete)"
      class="w-1/2 flex flex-col justify-start items-center border border-gray rounded-lg"
    >
      <h2 class="font-bold mb-4">completed</h2>
    </completed-assignment>
  </div>
</template>

<script>
import CompletedAssignment from '../components/CompletedAssignment.vue'
import CreateAssignment from '../components/CreateAssignment.vue'
import IncompletedAssignment from '../components/IncompletedAssignment.vue'
export default {
  components: { CompletedAssignment, IncompletedAssignment, CreateAssignment },
  name: 'Assignments',

  data() {
    return {
      assignments: [],
    }
  },
  async mounted() {
    await this.fetch()
  },
  methods: {
    async fetch() {
      try {
        const response = await fetch(
          'https://65a27ee042ecd7d7f0a7b641.mockapi.io/Vue3/assignments',
        )

        if (!response.ok) {
          throw new Error('Failed to fetch assignments')
        }

        const data = await response.json()
        this.assignments = data
        console.log(this.assignments)
      } catch (error) {
        console.error('Error fetching assignments:', error)
      }
    },
    toggleAssignment(assignment) {
      console.log(assignment, this.assignments)
      this.assignments.forEach(assign, (index) => {
        if (assign.id == assignment.id) {
          this.assignments[index].complete = !this.assignments[index].complete
        }
      })
    },
    addAssignment(name) {
      const assignment = {
        name: name,
        id: this.assignments.length + 1,
        complete: false,
      }

      fetch('https://65a27ee042ecd7d7f0a7b641.mockapi.io/Vue3/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assignment),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to add assignment')
          }
          return response.json()
        })
        .then((data) => {
          console.log('Assignment added:', data)
          this.fetch()
          // Handle the response data as needed
        })
        .catch((error) => {
          console.error('Error adding assignment:', error)
        })
    },
  },
  computed: {},
}
</script>

<style></style>
