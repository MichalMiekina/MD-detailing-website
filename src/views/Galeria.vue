<template>
  <div :style="{width:'100%', height: '100vh'}" >
    <h1>Zobacz jak zmieniamy auto</h1>
    <Carousel3d />
  </div>
</template>

<script>
import Carousel3d from '../components/Carousel3d.vue'
export default {
  components: {
    Carousel3d,
  },
  data() {
    return {};
  },
};
</script>

<style>

h1{
  color: #fff;
}
body{
  background-color: #000;
}

</style>
