<template>
<section class="home" id="home">
  <div class="content">
    <h3>fresh coffee in the morning</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima ea porro officiis molestiae, quibusdam similique.</p>
    <button class="btn">get yours now</button>
  </div>
</section>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {

 
}
</script>

<style>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background:url(../assets/img/home-img.jpeg) no-repeat;
  background-size: cover;
  background-position: center;
}
.home .content {
  max-width: 60rem;
}
.home .content h3 {
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
}
.home .content p {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 1.8;
  padding: 1rem 0;
  color: #eee;
}

</style>