<template>
  <div id="home">
    <div class="sh">
      <topbar class="topbar" />
      <keep-alive>
        <router-view class="pb-5 px-5 view"></router-view>
      </keep-alive>
      <!-- <button @click="getdata">Log Out</button> -->
      <footer>
        <div class="d-flex justify-content-end foot px-4 py-2 foot">
          <p class="tx">© 2021 Powered By UKSMK</p>
        </div>
      </footer>
    </div>
    <bottomNav />
  </div>
</template>

<script>
import topbar from "../components/Topbar";
import bottomNav from "../components/phone_view/bottom_navigation";
export default {
  components: { topbar, bottomNav },
  data() {
    return {
      users: null,
    };
  },
  methods: {
    getdata() {
      this.$router.push({ path: "/" }, () => {
        // window.localStorage.removeItem("res");
      });
    },
  },

  name: "BaseHome",
};
</script>

<style lang="scss">
.view {
  margin-top: 80px;
}
#home,
html {
  overflow: auto !important;
}
.foot {
  .tx {
    font-size: 14px;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 500;
  }
}
@media screen and (max-width: 700px) {
  .view {
    margin-top: 0 !important;
  }
  .sh {
    margin-bottom: 50px;
  }
}
</style>