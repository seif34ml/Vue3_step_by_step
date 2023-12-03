<script setup>
// import Home from './pages/Home.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div
      class="flex justify-between items-center"
      style="justify-content: space-between;"
    >
      <router-link class="mx-2" :to="{ path: `/homemmm` }">
        Welcome
      </router-link>
      <router-link class="mx-2" to="/abouthhh">About Us</router-link>
      <router-link class="mx-2" to="/assignments">Assignments</router-link>
    </div>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
