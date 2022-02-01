<template>
  <div>
    <nav id="menu">
      <MenuPoint
        :point="point"
        :key="point.id"
        v-for="point in points"
        :window="window"
        
      />
      <MenuBurger :window="window" :points="points" />
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
    MenuBurger,
  },
  data() {
    return {
      points: [
        { id: "1", text: "home" ,path: "/", },
        { id: "2", text: "cennik" ,path: "/cennik",},
        { id: "3", text: "rezerwacje" ,path: "/rezerwacje",},
        { id: "4", text: "galeria" ,path: "/galeria",},
        { id: "5", text: "oferta" ,path: "/oferta",},
        
        { id: "6", text: "kontakt" ,path: "/kontakt",},
      ],
    };
  },
};
</script>

<style scope>
nav {
  width: 100%;
  height: 80px;
  background-color: #222;
  color: aliceblue;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
