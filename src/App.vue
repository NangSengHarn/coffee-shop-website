<template>
  <Header></Header>
  <Body></Body>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'
import Body from './views/Body.vue'
export default {
  components:{
    Header,Body
  }
}

</script>

<style>

</style>
