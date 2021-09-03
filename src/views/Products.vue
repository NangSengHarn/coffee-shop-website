<template>
<section class="products">
  <h1 class="heading"> our <span>products</span></h1>
  <div class="box-container">
    <div class="box" v-for="item in product" :key="item">
      <div class="icons">

      </div>
      <div class="images">
        <img :src=item.itemImg :alt=item.itemName>
      </div>
      <div class="content">
        <h3>{{item.itemName}}</h3>
        <div class="stars">

        </div>
        <div class="price">15.99 <span>{{item.itemPrice}}</span></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import getItem from '../composable/getItem'
export default {
  setup(){
    let {menu,product,addToCartItem,load,error}=getItem();
    load();
    let addToCart=async(id)=>{
      let updateData={
          addToCart:true
        }
        let res=await db.collection("sellItem").doc(id).update(updateData);
    }
    return {product,error,addToCart}
  }
}

</script>

<style>
.products .box-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap:1.5rem;
}
.products .box-container .box{
    text-align: center;
    border:var(--border);
    padding: 2rem;
}
.products .box-container .box .icons a{
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    border:var(--border);
    color:#fff;
    margin:.3rem;
}
.products .box-container .box .icons a:hover{
    background:var(--main-color);
}
.products .box-container .box .image{
    padding: 2.5rem 0;
}
.products .box-container .box .image img{
    height: 25rem;
}
.products .box-container .box .content h3{
    color:#fff;
    font-size: 2.5rem;
}
.products .box-container .box .content .stars{
    padding: 1.5rem;
}
.products .box-container .box .content .stars i{
    font-size: 1.7rem;
    color: var(--main-color);
}
.products .box-container .box .content .price{
    color:#fff;
    font-size: 2.5rem;
}
.products .box-container .box .content .price span{
    text-decoration: line-through;
    font-weight: lighter;
    font-size: 1.5rem;
}
</style>