<template>
  <div :style="{ width: '100%', height: '100vh' }">
    <h1>Zobacz jak zmieniamy auto</h1>
    <!-- <Carousel3d /> -->
    <!-- <ul>
      <li v-for="slide in slides" :key="slide"><img src="slide" alt=""></li>
    </ul> -->
    <div id="galleryContainer">
      <img class="gallery-view slide-secondary" id="slide-left" :src="slides[slidesNr[0]].src" alt="" @click="prevSlide()">
      <img class="gallery-view slide-primary" id="slide-center" :src="slides[slidesNr[1]].src" alt="" />
      <img class="gallery-view slide-secondary" id="slide-right" :src="slides[slidesNr[2]].src" alt="" @click="nextSlide()">
    </div>
    
  </div>
</template>

<script>
// import Carousel3d from '../components/Carousel3d.vue'
// export default {
//   components: {
//     Carousel3d,
//   },
//   data() {
//     return {};
//   },
// };
// Slide.config.width=10

export default {
  data() {
    return {
      slides: [
        { src: require("../assets/mdphotos/1.jpg"), index: 0 },
        { src: require("../assets/mdphotos/2.jpg"), index: 1 },
        { src: require("../assets/mdphotos/4.jpg"), index: 2 },
        { src: require("../assets/mdphotos/5.jpg"), index: 3 },
        // { src: require("../assets/mdphotos/10.jpg"), index: 4 },
        // { src: require("../assets/mdphotos/11.jpg"), index: 5 },
        
        // { src: require('../assets/mdphotos/6.png'), index: 6 },
        // { src: require('../assets/mdphotos/3.jpg'), index: 2 },
        // { src: require('../assets/mdphotos/7.jpg'), index: 6 },
        // { src: require('../assets/mdphotos/8.jpg'), index: 7 },
        // { src: require('../assets/mdphotos/9.jpg'), index: 8 },
      ],
      slidesNr:[0,1,2]
    };
  },
  methods:{
    prevSlide(){
      this.slidesNr = this.slidesNr.map(x=> (x>0) ? x-1 : this.slides.length-1)
    },
    nextSlide(){
      this.slidesNr = this.slidesNr.map(x=> (x==this.slides.length-1) ? 0 : x+1)
    },
    
  }
};
</script>

<style lang="scss">
h1 {
  color: #fff;
}
body {
  background-color: #000;
}

img {
  display: inline-flex;
  
  
  &.gallery-view{
    // position: absolute;
  }

  &.slide-secondary{
    // position: absolute;
    width: 20%;
    margin-bottom: 5%;
  }

  &.slide-primary{
    width: 40%;

  }
}

#galleryContainer{
  text-align: center;

}
</style>
