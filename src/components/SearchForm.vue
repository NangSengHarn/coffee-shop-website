<template>
 
      <input type="search" id="search-box" placeholder="search here...">
      <label for="search-box"><span class="material-icons">
        search
      </span></label>
      
</template>

<script>
export default {
    
}
</script>

<style scoped>

input{
    height: 100%;
    width: 100%;
    font-size: 1.6rem;
    color: var(--black);
    padding: 1rem;
    text-transform: none;
}
label{
    cursor: pointer;
    font-size: 2.2rem;
    margin-right: 1.5rem;
    color: var(--black);
}
label:hover{
    color: var(--main-color);
}
</style>