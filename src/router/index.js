import { createRouter, createWebHistory } from 'vue-router'
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
