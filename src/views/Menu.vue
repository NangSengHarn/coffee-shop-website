<template>
  <section class="menu">
    <h1 class="heading"> our <span>menu</span></h1>
    <div class="box-container">
      <div class="box" v-for="item in menu" :key="item">
        <img :src=item.itemImg :alt=item.itemName>
        <h3>{{item.itemName}}</h3>
        <div class="price">$15.99 <span>{{item.itemPrice}}</span></div>
        <button class="btn" @click="addToCart(item.id)">add to cart</button>
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
    return {menu,error,addToCart}
  }
}
</script>

<style>
.menu .box-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}
.menu .box-container .box{
  padding: 5rem;
  text-align: center;
  border: .1rem solid rgba(255,255,255,.3);
}
.menu .box-container .box img{
  height:10rem;
}
.menu .box-container .box h3{
  color: #fff;
  font-size: 2rem;
  padding: 1rem 0;
}
.menu .box-container .box .price{
  color: #fff;
  font-size: 2.5rem;
  padding: .5rem 0;
}
.menu .box-container .box .price span{
  font-size: 1.5rem;
  text-decoration: line-through;
  font-weight: lighter;
}
.menu .box-container .box:hover{
  background: #fff;
}
.menu .box-container .box:hover > *{
  color: #13131a;
}
</style>