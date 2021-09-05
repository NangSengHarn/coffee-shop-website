<template>
  <section class="review">
    <h1 class="heading">customer's <span>review</span></h1>
    <div class="box-container">
      <div class="box" v-for="review in reviews" :key="review">
            <img src="../assets/img/quote-img.png" class="quote">
            <p>{{review.review}}</p>
            <img :src=review.reviewImg class="user" alt="avatar">
            <h3>{{review.personName}}</h3>
            <div class="stars">
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star_half</i>
            </div>
      </div>
    </div>
  </section>
</template>

<script>
import getReviews from '../composable/getReviews'
export default {
setup(){
  let {reviews,error,load}=getReviews();
  load();
  return {reviews}
}
}
</script>

<style>
.review .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
}

.review .box-container .box{
    border:.1rem solid rgba(255,255,255,.3);
    text-align: center;
    padding:3rem 2rem;
}

.review .box-container .box p{
    font-size: 1.5rem;
    line-height: 1.8;
    color:#ccc;
    padding:2rem 0;
}

.review .box-container .box .user{
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    object-fit: cover;
}

.review .box-container .box h3{
    padding:1rem 0;
    font-size: 2rem;
    color:#fff;
}

.review .box-container .box .stars i{
    font-size: 1.5rem;
    color:#d3ad7f;
}
</style>