<template>
  <div>
    <Menu :window="window" id="menu"/>
    <router-view id="router"></router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu
  },
  data() {
    return {
      window: {
        width: window.innerWidth,
        height: 0,
      },
    };
  },
  
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style style="scss">
*{
  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #d4a747;
}

div>h1{
  display: flex;
  justify-content: center;
  font-size: 300%;
  width: 60%;
}


#menu {
  position: fixed;
  z-index: 5;
}

#router{
  padding-top: 80px;
}
</style>