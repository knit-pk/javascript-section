<template>
  <div class="wrapper">
    <nuxt-link :to="'/' ">
      <div class="main-page">HOME</div>
    </nuxt-link>
    
    
  <nuxt-link :to="'/books' ">
      <div class="all-books">BOOKS</div>
    </nuxt-link>

  <nuxt-link :to="'/' ">
    <div class="favourites">FAVOURITES</div>
  </nuxt-link>
  </div >
</template >

  <script>
</script>

  <style>
.wrapper {
  display: grid;
  grid-template-columns: 35% 35% 30%;
  height: 50px;
  background: grey;
  text-align: center;
}
</style>
