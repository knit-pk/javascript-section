<template>
  <section class="single-book">
      <h1>{{book.title}}</h1>
    <div>
        <img :src="book.img" class="book-img" :alt="book.title">
    </div>
    <p>Autor: {{book.author}}</p>
    <p>Opis: {{book.description}}</p>
  </section>
</template>


<script>
export default {

    asyncData(context){
      return new Promise((resolve, reject) => {
          setTimeout(()=>{
              resolve({
                book:[
                    {
                        id: "1",
                        title: "Wieża Jaskółki", 
                        author: "Sapkowski", 
                        description: "Super mega książka", 
                        img: "https://i.ytimg.com/vi/PgKISfwfbBw/maxresdefault.jpg"
                    },
                    {
                        id: "2",
                        title: "Miecz przeznaczenia", 
                        author: "Sapkowski", 
                        description: "Super mega książka no mówię Ci Heniek", 
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QrIDjxxaX9wrPevWBooVqRVV5Kj2iMEID5zfr3D1a4_orDYD"
                    }
                ].find(el => el.id === context.params.id)
              })

          }, 1500)
      })
  }
}
</script>
