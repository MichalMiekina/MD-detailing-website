<template>
  <div class="burger" v-if="window.width < 800">
    
    <div class="burger-list">

      <div @click="burger_activity = !burger_activity">
        <MenuBurgerIcon  />
      </div>

      <MenuBurgerItems
        class="menu-burger-items"
        v-for="point in points"
        :key="point.id"
        :burger_activity="burger_activity"
        :point="point"
      />
      
    </div>
  </div>
</template>

<script>
import MenuBurgerItems from "./MenuBurgerItems.vue";
import MenuBurgerIcon from "./MenuBurgerIcon.vue";
export default {
  components: {
    MenuBurgerItems, MenuBurgerIcon
  },
  props: ["window", "points"],
  data() {
    return {
      burger_activity: false,
    };
  },
};
</script>

<style>
.burger {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  z-index: 100;
}
</style>
