<template>
  <div class="burger" v-if="window.width < 800">
    <img
      src="../assets/hamburger-icon.png"
      alt="expand menu"
      @click="() => (burger_activity = !burger_activity)"
    />
    <div class="burger-list">
        <img 
        src="../assets/hamburger-arrow-icon.png" 
        alt="burger-arrow" 
        v-if="burger_activity"
        @click="() => (burger_activity = !burger_activity)"
        />
      <MenuBurgerItems
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
export default {
  components: {
    MenuBurgerItems,
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
}
.burger > img {
  cursor: pointer;
  height: 100%;
}
.burger-list > img {
  cursor: pointer;
  height: 100%;
}
</style>