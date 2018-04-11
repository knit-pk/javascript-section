<template>
<div>
      <h1>Książki</h1>
<input type="text" v-model="search" placeholder="search books">
  <div class="books-container">
        <Book
            v-for="book in booksFiltered"
            :key="book.id"
            :img="book.img"
            :title="book.title"
            :description="book.description"
            :id="book.id"
        />
        <!-- <Book
            title="Miecz przeznaczenia"
            author="Sapkowski"
            desciption="Super mega książka no mówię Ci Heniek"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QrIDjxxaX9wrPevWBooVqRVV5Kj2iMEID5zfr3D1a4_orDYD"
        />
         -->
  </div>
</div>

</template>

<script>
import Book from '@/components/Book';
export default {
  components: {
      Book
  },
    data () {
      return {
          search:""
      }
  },
  computed: {
     booksFiltered: function() {
         return this.books.filter((book)=>{
             return book.title.match(this.search)
         })
     } 
  },
  asyncData(){
      return new Promise((resolve, reject) => {
          setTimeout(()=>{
              resolve({
                books:[
                    {
                        id: "1",
                        title: "Wieża Jaskółki", 
                        description: "Super mega książka", 
                        img: "https://i.ytimg.com/vi/PgKISfwfbBw/maxresdefault.jpg"
                    },
                    {
                        id: "2",
                        title: "Miecz przeznaczenia", 
                        description: "Super mega książka no mówię Ci Heniek", 
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QrIDjxxaX9wrPevWBooVqRVV5Kj2iMEID5zfr3D1a4_orDYD"
                    }
                ]
              })

          }, 1500)
      })
  }
}
</script>

<style scoped>
    .books-container{
        display: flex;
    }
</style>

