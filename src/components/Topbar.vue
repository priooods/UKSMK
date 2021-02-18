<template>
  <div class="top">
    <div class="d-flex justify-content-end py-3 px-5 align-items-center">
      <h5
        class="mr-auto my-auto text-uppercase font-weight-bold xx"
        style="color: #195bff"
      >
        MLBSYSTEM
      </h5>
      <div class="route mr-auto d-none d-md-block d-lg-block d-xl-block">
        <div class="d-flex align-items-center justify-content-center">
          <router-link to="/homepage" class="mr-3 ml-3">Home</router-link>
          <router-link to="/karyawan" class="mr-3 ml-3">Karyawan</router-link>
          <router-link to="/invoice" class="mr-3 ml-3">Invoice</router-link>
          <router-link class="mr-3 ml-3" to="/salary">Salary</router-link>
        </div>
      </div>
      <div
        class="end justify-content-end align-items-center d-none d-md-flex d-lg-flex d-xl-flex"
      >
        <i class="bx bx-calendar"></i>
        <p class="my-auto ml-2">{{ time }}</p>
        <p class="mx-2 my-auto">|</p>
      </div>
      <v-avatar size="35" class="d-none d-md-block d-lg-block d-xl-block">
        <img src="../assets/man.png" alt="Avatar" />
      </v-avatar>
      <vs-button
        flat
        to="/"
        class="my-auto col-3 xx d-block d-md-none d-lg-none d-xl-none"
        >Logout</vs-button
      >
    </div>
  </div>
</template>

<script>
import timezone from "moment-timezone";
export default {
  name: "topbar",
  data() {
    return {
      avatar: Object,
      time: null,
    };
  },
  computed: {
    myprofile() {
      return this.$store.getters.users;
    },
  },
  mounted() {
    var tm = timezone.tz("Asia/Jakarta").format("D MMMM YYYY");
    this.time = tm;
  },
  methods: {
    notifi() {
      return this.$notification.warning({
        message: "Warning",
        placement: "topLeft",
        description: "Mohon maaf halaman ini sedang dalam proses development",
      });
    },
  },
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,700&display=swap");
.top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  z-index: 4;
  .end {
    p {
      font-size: 16px;
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 500;
    }
  }
  .route {
    a {
      font-weight: bold;
      text-transform: uppercase;
      font-family: "Source Sans Pro", sans-serif;
      color: rgb(172, 172, 172);
    }
    a.active {
      color: #195bff;
    }
    a:hover {
      color: #195bff;
      text-decoration: none;
    }
  }
  .ln {
    width: 100%;
    height: 1px;
    background: black;
  }
}
@media screen and (max-width: 900px) {
  .top {
    .xx {
      font-size: 13px;
    }
  }
}
</style>