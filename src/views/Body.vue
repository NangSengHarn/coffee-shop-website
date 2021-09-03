<template>
  <Home></Home>
  <About></About>
  <Menu></Menu>
  <Products></Products>
  <Review></Review>
  <Contact></Contact>
  <Blogs></Blogs>
</template>

<script>
import Review from './Review'
import Blogs from './Blogs'
import Contact from './Contact'
import Products from './Products'
import Menu from './Menu'
import About from './About'
import Home from './Home'
export default {
  components: {
    Review,
    Blogs,
    Contact,
    Products,
    Menu,
    About, Home },

}
</script>

<style>

</style>