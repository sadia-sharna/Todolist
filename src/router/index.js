import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'TodoList',
    component: () => import('../views/TodoList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router