<template>
    <div v-for="item in addToCartItem" :key="item" class="cart-item">
      <div class="grid">
        <div>
          <img :src=item.itemImg :alt=item.itemName>
        </div>
        <div class="content">
          <h3>{{item.itemName}}</h3>
          <div class="price">${{item.itemPrice}}/-</div>
        </div>
        <div>
          <span class="material-icons close" @click="cancelItem(item.id)">
            close
          </span>
        </div>
      </div>
    </div>

    <button class="btn" @click="checkOut=true">Checkout Now</button>
    
    <p>{{error}}</p>
</template>

<script>
import getItem from "../composable/getItem";
import {db} from "../firebase/config";
import { ref } from '@vue/reactivity';
export default {
    setup(){
      let {menu,product,addToCartItem,load,error}=getItem();
      
      load();

      let cancelItem=async(id)=>{
        let updateData={
          addToCart:false
        }
        let res=await db.collection("sellItem").doc(id).update(updateData);
        
      }

      return {addToCartItem,error,cancelItem};
    }
}
</script>

<style scoped>

.cart-item{
    position: relative;
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.cart-item .close{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: var(--black);
}
.cart-item .close:hover{
    color: var(--main-color);
}
.cart-item .grid {
  display: grid;
  grid-template-columns: 1fr 3.5fr 0.5fr;
  gap: 10px;
}
.cart-item img{
    height: 7rem;
    width: 7rem;
}
.cart-item .content h3{
    font-size: 2rem;
    color: var(--black);
    padding-bottom: .5rem;
}
.cart-item .content .price{
    font-size: 1.5rem;
    color: var(--main-color);
}
.btn{
    width: 100%;
    text-align: center;
}
</style>