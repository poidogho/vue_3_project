import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import Pokemons from '../views/pokemons/Pokemons.vue'
import NotFound from '../views/NotFound.vue'
import Counter from '../views/Counter.vue'
import Posts from '../views/posts/index.vue'
import PostDetails from '../views/posts/postDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetails,
      props: true
    },
    {
      path: '/pokemons',
      name: 'Pokemons',
      component: Pokemons
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'postDetails',
      component: PostDetails,
      props: true
    },
    // redirect
    {
      path: '/all-jobs',
      redirect: Jobs
    },
    // Not found resource
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
