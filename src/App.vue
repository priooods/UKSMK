<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700;1,800&display=swap");
// #fdb827 Orange
// #21209c Blue
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");

::-webkit-scrollbar {
  width: 8px;
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #2b2b2b;
  border-radius: 50px;
}
</style>
