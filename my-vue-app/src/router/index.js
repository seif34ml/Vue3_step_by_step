import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:msg',
      name: 'home',
      component: Home,
      props: true,
    },

    {
      path: '/about:msg',
      name: 'about',
      component: About,
      props: true,
    },
  ],
}) //there's another that is identical but replace 'create' with 'browse'

export default router
