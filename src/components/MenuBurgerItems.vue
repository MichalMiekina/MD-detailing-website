<template>
  <div class="burger-list" v-if="burger_activity">
    <span>{{ point.text }}</span>
  </div>
</template>

<script>
export default {
  props: ["burger_activity", "point"],
  data() {
    return {};
  },
};
</script>

<style>
ul {
  margin-top: 100px;
  position: absolute;
}
.burger-list{
    background-color: #aaa;
}
.burger-list span{
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  font-family: "Monaco", monospace;
  font-size: 125%;
}
</style>