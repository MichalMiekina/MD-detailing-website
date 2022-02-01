<template>
  <div class="point" v-if="window.width > 800">
    <router-link class="routerPoint" :to="point.path">
      <span>{{ point.text }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["point", "window"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.point {
  height: 80px;
  width: 100%;
  cursor: pointer;
  transition: background-color 1s ease-out;

  :hover{
    background-color: #888;
    color: black;
  }

  span{
  justify-content: center;
  font: 125% "Monaco", monospace;
  }
}

.routerPoint {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  span{
    display: flex;
  }
}

a {
  text-decoration: none;
  color: white;
}
</style>
