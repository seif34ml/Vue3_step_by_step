<template>
  <section class="">
    <h1>assignments</h1>
    <div>
      <Inprogress :assignments="assignments" :title="'in progress'" />
      <Completed :assignments="assignments" :title="'completd'" />
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
        { id: 1, title: 'wake up', completed: true },
        { id: 2, title: 'do sports', completed: true },
      ],
    }
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
