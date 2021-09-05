import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Products from '../views/Products.vue'
import Review from '../views/Review.vue'
import Contact from '../views/Contact.vue'
import Blogs from '../views/Blogs.vue'
import Body from '../views/Body.vue'

const routes = [
  {
    path:'/',
    name:'Body',
    component:Body
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition)=>{
    if(to.hash){
      return {el: to.hash,behavior: 'smooth'}
    }else {
      return {x: 0,y:0}
    }
    
  }
})

export default router
