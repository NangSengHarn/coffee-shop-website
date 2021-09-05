<template>
  <nav>
      <router-link :to="{name:'Body',hash:'#homePage'}">Home</router-link>
      <router-link :to="{name:'Body',hash:'#aboutPage'}">About</router-link>
      <router-link :to="{name:'Body',hash:'#menuPage'}">Menu</router-link>
      <router-link :to="{name:'Body',hash:'#productsPage'}">Products</router-link>
      <router-link :to="{name:'Body',hash:'#reviewPage'}">Review</router-link>
      <router-link :to="{name:'Body',hash:'#contactPage'}">Contact</router-link>
      <router-link :to="{name:'Body',hash:'#blogsPage'}">Blogs</router-link>
  </nav>
  
</template>

<script>
export default {

}
</script>

<style>
nav a{
    margin:0 1rem;
    font-size: 1.6rem;
    color:#fff;
}
nav a:hover{
    color: #d3ad7f;
    border-bottom: .1rem solid #d3ad7f;
    padding-bottom: .5rem;
}
</style>