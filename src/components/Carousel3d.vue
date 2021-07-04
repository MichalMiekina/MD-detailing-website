<template>
    <carousel-3d>
      <slide v-for="slide in slides" :key="slide.index" :index="slide.index">
        <img :slide="slide" :src="slide.src" alt="test" />
      </slide>
      <!-- <slide :index="20">
        <img src="../assets/mdphotos/1.jpg" alt="" />
      </slide>
      <slide :index="21">
        <img src="../assets/mdphotos/2.jpg" alt="" />
      </slide>
      <slide :index="22">
        <img src="../assets/mdphotos/3.jpg" alt="" />
      </slide> -->
    </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: [
        { src: require('../assets/mdphotos/1.jpg'), index: 0 },
        { src: require('../assets/mdphotos/2.jpg'), index: 1 },
        { src: require('../assets/mdphotos/3.jpg'), index: 2 },
        { src: require('../assets/mdphotos/4.jpg'), index: 3 },
        { src: require('../assets/mdphotos/5.jpg'), index: 4 },
        { src: require('../assets/mdphotos/6.png'), index: 5 },
        { src: require('../assets/mdphotos/7.jpg'), index: 6 },
        { src: require('../assets/mdphotos/8.jpg'), index: 7 },
        { src: require('../assets/mdphotos/9.jpg'), index: 8 },
        { src: require('../assets/mdphotos/10.jpg'), index: 9 },
      ],
    };
  },
};
</script>

<style>
</style>
