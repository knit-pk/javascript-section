<template>
    
    <div class="single-book">
        <div class="choose-favourite"></div>
        <nuxt-link :to="'/books/' + id">
            <h2>{{title}}</h2>
            <p>{{author}}</p>
            <p>{{description}}</p>
            <div class="book-img" :style="{backgroundImage: 'url('+ img +')'}"></div>
       </nuxt-link>
    </div>
    
</template>

<script>
export default {
  props: ["title", "author", "description", "img", "id"]
};
</script>

<style scoped>
.single-book {
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 280px;
  border: 1px solid #ccc;
  margin: 10px;
}
.book-img {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
.choose-favourite {
  background-image: url("https://png.icons8.com/metro/1600/like.png");
  height: 20px;
  width: 20px;
  background-size: 100%;
  float: right;
}
</style>
