import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Products from '../views/Products.vue'
import Review from '../views/Review.vue'
import Blogs from '../views/Blogs.vue'

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/menu',
    name:'Menu',
    component:Menu
  },
  {
    path:'/products',
    name:'Products',
    component:Products
  },
  {
    path:'/review',
    name:'Review',
    component:Review
  },
  {
    path:'/blogs',
    name:'Blogs',
    component:Blogs
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
