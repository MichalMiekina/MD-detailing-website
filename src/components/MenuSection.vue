<template>
  <div class="section " v-if="window.width > 800">
    <div class="routerPoint">
      <span @click="goto(section.path)">{{ section.text }}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["section", "window"],
  data() {
    return {};
  },
  methods: {
    goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.section {
  height: 80px;
  width: 100%;
  cursor: pointer;
  transition: background-color 1s ease-out;

  :hover {
    background-color: #888;
    color: black;
  }

  span {
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

  span {
    display: flex;
  }
}

a {
  text-decoration: none;
  color: white;
}
</style>
