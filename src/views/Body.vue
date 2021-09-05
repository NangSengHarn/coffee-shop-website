<template>
  <Home id="homePage"></Home>
  <About id="aboutPage"></About>
  <Menu id="menuPage"></Menu>
  <Products id="productsPage"></Products>
  <Review id="reviewPage"></Review>
  <Contact id="contactPage"></Contact>
  <Blogs id="blogsPage"></Blogs>
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
    Review,Blogs,Contact,Products,Menu,About, Home }
}
</script>

<style>

</style>