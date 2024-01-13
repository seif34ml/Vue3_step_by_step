<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
export default {
  mounted() {
    console.log(this.$route.name)
  },
  components: { TheHeader }, //single use component
}
</script>

<template>
  <div>
    <TheHeader />
    <div class="flex justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  </div>
  <h1 class="font-black text-xl capitalize w-full text-center mt-8 mb-8">
    {{ $route.name }}
  </h1>
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
