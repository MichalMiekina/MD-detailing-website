<template>
  <div>
    <nav id="menu">
      <MenuSection
        :section="section"
        :key="section.id"
        v-for="section in sections"
        :window="window"
      />
      <MenuBurger :window="window" :sections="sections" />
    </nav>
  </div>
</template>

<script>
import MenuSection from "./MenuSection.vue";
import MenuBurger from "./MenuBurger.vue";

export default {
  props: ["window"],
  components: {
    MenuSection,
    MenuBurger,
  },
  data() {
    return {
      sections: [
        { id: "1", text: "home", path: "home" },
        { id: "2", text: "cennik", path: "prices" },
        { id: "3", text: "rezerwacje", path: "booking" },
        { id: "4", text: "galeria", path: "gallery" },
        { id: "5", text: "oferta", path: "offer" },
        { id: "6", text: "kontakt", path: "contact" },
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
