<template>
<section class="about">
  <h1 class="heading">
    <span>about</span>us
  </h1>
  <div class="row">
    <div class="image">
      <img src="../assets/img/about-img.jpeg" alt="about img">
    </div>
    <div class="content">
      <h3>what makes our coffee special?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam provident pariatur soluta amet commodi dicta accusamus dignissimos inventore debitis vero ullam sit labore, fugiat praesentium animi molestiae quod. Repudiandae, debitis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laboriosam ut voluptatibus, corporis atque commodi, aperiam illo tempore culpa quam eveniet incidunt voluptatem dolorem</p>
      <button class="btn">learn more</button>
    </div>
  </div>
</section>
</template>

<script>
export default {


}
</script>

<style>
.heading{
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding-bottom: 3.5rem;
  font-size: 4rem;
}
.heading span{
  color: #d3ad7f;
  text-transform: uppercase;
}
.about .row {
  display: flex;
  align-items: center;
  background: #13131a;
  flex-wrap: wrap;
}
.about .row .image{
  flex: 1 1 45rem;
}
.about .row .image img{
  width: 100%;
}
.about .row .content{
  flex: 1 1 45rem;
  padding: 2rem;
}
.about .row .content h3{
  font-size: 3rem;
  color: #fff;
}
.about .row .content p{
  font-size: 1.6rem;
  color: #ccc;
  padding: 1rem 0;
  line-height: 1.8;
}
</style>