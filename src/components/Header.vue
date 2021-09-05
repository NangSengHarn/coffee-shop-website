<template>
<div class="header">
  <a href="#" class="logo">
    <img src="../assets/img/logo.png" alt="logo">
  </a>
  <div class="navbar" :class="{active:showNavbar}">
    <Navbar></Navbar>
  </div>



  <div class="icons">
      <span class="material-icons" id="search-btn"  @click="clickSearch">
        search
      </span>
      <span class="material-icons" id="cart-btn" @click="clickCart">
        shopping_cart
      </span>
      <span class="material-icons" id="menu-btn" @click="clickMenu">
        menu
      </span>
  </div>

  <div class="search-form" :class="{active:showSF}">
    <SearchForm></SearchForm>
  </div>
 
  <div class="cart-items-container" :class="{active:showCIC}">
    <CartItemContainer></CartItemContainer>
  </div>
</div>
</template>

<script>
import Navbar from './Navbar'
import CartItemContainer from './CartItemContainer'
import SearchForm from './SearchForm'
import { ref } from '@vue/reactivity'


export default {
  components: {
    Navbar,
    CartItemContainer, SearchForm },

  setup(){
    
    let showSF=ref(false);
    let showCIC=ref(false);
    let showNavbar=ref(false);
   
    const clickSearch=()=>{
      showSF.value=!showSF.value;
      showCIC.value=false;
      showNavbar.value=false;
    }
    const clickCart=()=>{
      showCIC.value=!showCIC.value;
      showSF.value=false;
      showNavbar.value=false;
    }
    const clickMenu=()=>{
      showNavbar.value=!showNavbar.value;
      showCIC.value=false;
      showSF.value=false;
    }

    window.onscroll=()=>{
      showNavbar.value=false;
    }
    
    return {showSF,showCIC,showNavbar,clickMenu,clickCart,clickSearch}
  }
}
</script>

<style>
.header{
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1.5rem 7%;
    border-bottom: var(--border);
    position: fixed;
    top:0; left:0; right:0;
    z-index:1000;
}
.header .logo img{
    height: 6rem;
}
.header .navbar a{
    margin:0 1rem;
    font-size: 1.6rem;
    color:#fff;
}
.header .navbar a:hover{
    color: var(--main-color);
    border-bottom: .1rem solid var(--main-color);
    padding-bottom: .5rem;
}
.header .icons span{
    color: #fff;
    cursor: pointer;
    font-size: 2.5rem;
    margin-left: 2rem;
}
.header .icons span:hover{
    color: var(--main-color);
}
#menu-btn {
    display: none;
}

.search-form{
    position: absolute;
    top: 115%;right: 7%;
    background: #fff;
    width: 50rem;
    height: 5rem;
    display: flex;
    align-items: center;
    transform: scaleY(0);
    transform-origin: top;
}
.search-form.active{
    transform: scaleY(1);
}

.cart-items-container{
    position: absolute;
    top: 100%;
    right: -100%;
    height: calc(100vh - 9.5rem);
    width: 35rem;
    background: #fff;
    padding: 0 1.5rem;
}
.cart-items-container.active{
    right: 0;
}
</style>