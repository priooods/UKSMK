<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app,
html {
  background: rgb(248, 248, 248);
}
::-webkit-scrollbar {
  width: 8px;
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #2b2b2b;
  border-radius: 50px;
}
</style>
