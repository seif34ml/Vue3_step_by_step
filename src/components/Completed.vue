<template>
  <section class="border-2 border-black mt-4">
    <slot />
    <slot :name="'hide'" />
    <div
      class="w-1/4 mx-auto mt-4 border-2 border-dotted border-black divide-y mb-2"
    >
      <tag-buttons
        @setTag="setTag"
        :selectedTags="selectedTags"
        :tags="getTags"
      />
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
import TagButtons from './TagButtons.vue'

export default {
  name: 'Completed-vue',
  components: { TagButtons },
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
  data() {
    return {
      selectedTags: [],
    }
  },
  methods: {
    toggleAssignment(assignment) {
      console.log('ghghg')
      this.$emit('toggleAssignment', assignment)
    },

    setTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags.splice(this.selectedTags.indexOf(tag), 1)
      } else {
        this.selectedTags.push(tag)
      }
    },
  },
  computed: {
    getCompletedAssignments() {
      return this.assignments.filter((assignment) => {
        if (this.selectedTags.length == 0) {
          return assignment.completed
        } else {
          return (
            assignment.completed && this.selectedTags.includes(assignment.tag)
          )
        }
      })
    },

    getTags() {
      return [
        ...new Set(
          this.assignments
            .filter((assignment) => {
              return assignment.completed
            })
            .map((assignment) => {
              return assignment.tag
            }),
        ),
      ]
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
