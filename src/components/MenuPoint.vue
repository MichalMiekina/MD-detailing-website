<template>
  <div class="point" v-if="window.width > 800">
    
    
    <router-link :to=point.path><span>{{ point.text }}</span></router-link>
  </div>
</template>

<script>
export default {
  props: ["point","window"],
  data() {
    return {
    };
  },
};
</script>

<style>

.point {
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: background-color 1s ease-out;
  /* color: #fff; */
}
.point span {
  flex-direction: row;
  justify-content: center;
  align-content: center;
  font-family: "Monaco", monospace;
  font-size: 125%;
}
.point:hover {
  background-color: #aaa;
}
</style>