<template>
  <div>
    <nav id="menu">
      <MenuPoint :point="point" :key="point.id" v-for="point in points" :window="window"/>
      <MenuBurger :window="window"/>
    </nav>
    
  </div>
</template>

<script>
import MenuPoint from "./MenuPoint.vue";
import MenuBurger from "./MenuBurger.vue";

export default {
  props: ["window"],
  components: {
    MenuPoint,
    MenuBurger
  },
  data() {
    return {
      points: [
        { id: "1", text: "home" },
        { id: "2", text: "rezerwacje" },
        { id: "3", text: "cennik" },
        { id: "4", text: "oferta" },
        { id: "5", text: "galeria" },
        { id: "6", text: "kontakt" },
      ],
    };
  },
  
};
</script>

<style scope>
nav {
  width: 100%;
  height: 80px;
  background-color: #ccc;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>