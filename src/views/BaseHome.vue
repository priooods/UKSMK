<template>
  <div class="home">
    <topbar class="topbar" />
    <router-view class="pb-5 pt-4 px-4 view"></router-view>
    <button @click="getdata">Log Out</button>
    <footer>
      <div class="d-flex justify-content-end foot px-4 py-2 foot">
        <p class="tx">© 2021 Powered By UKSMK</p>
      </div>
    </footer>
  </div>
</template>

<script>
import topbar from "../components/Topbar";
export default {
  components: { topbar },
  data() {
    return {
      users: null,
    };
  },
  methods: {
    getdata() {
      this.$router.push({ path: "/" }, () => {
        window.localStorage.removeItem("res");
      });
    },
  },

  name: "BaseHome",
};
</script>

<style lang="scss">
.view {
  margin-top: 60px;
}
.foot {
  .tx {
    font-size: 14px;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 500;
  }
}
</style>