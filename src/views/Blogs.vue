<template>
<section class="blogs">

    <h1 class="heading"> our <span>blogs</span> </h1>

    <div class="box-container">

        <div class="box" v-for="blog in blogs" :key="blog">
            <div class="image">
                <img :src=blog.blogImg alt="">
            </div>
            <div class="content">
                <a href="#" class="title">{{blog.title}}</a>
                <span>by {{blog.author}} / {{blog.date}}</span>
                <p>{{blog.content}}</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import getBlogs from '../composable/getBlogs'
export default {
  setup(){
    let {blogs,error,load}=getBlogs();
    load();
    return {blogs};
  }

}
</script>

<style>
.blogs .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
}

.blogs .box-container .box{
    border:.1rem solid rgba(255,255,255,.3);    
}

.blogs .box-container .box .image{
    height: 25rem;
    overflow:hidden;
    width: 100%;
}

.blogs .box-container .box .image img{
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.blogs .box-container .box:hover .image img{
    transform: scale(1.2);
}

.blogs .box-container .box .content{
    padding:2rem;
}

.blogs .box-container .box .content .title{
    font-size: 2.5rem;
    line-height: 1.5;
    color:#fff;
}

.blogs .box-container .box .content .title:hover{
    color:#d3ad7f;
}

.blogs .box-container .box .content span{
    color:#d3ad7f;
    display: block;
    padding-top: 1rem;
    font-size: 2rem;
}

.blogs .box-container .box .content p{
    font-size: 1.6rem;
    line-height: 1.8;
    color:#ccc;
    padding:1rem 0;
}
</style>