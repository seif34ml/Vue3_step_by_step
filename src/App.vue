<template>
  <img
    class="flex items-center justify-center"
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <Assignments />
</template>

<script>
import Assignments from './components/Assignments.vue'
export default {
  name: 'App',
  components: {
    Assignments,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
