<template>
  <div class="d-none d-md-block d-lg-block d-xl-block top">
    <div class="d-flex justify-content-end py-2 px-4 align-items-center">
      <h5 class="mr-auto my-auto text-uppercase font-weight-bold">uksmk</h5>
      <div class="route mr-auto">
        <div class="d-flex align-items-center justify-content-center">
          <router-link to="/home" class="mr-3 ml-3">Home</router-link>
          <router-link to="/karyawan" class="mr-3 ml-3">Karyawan</router-link>
          <router-link to="/warn" class="mr-3 ml-3">Invoice</router-link>
          <router-link class="mr-3 ml-3" to="/warn">Salary</router-link>
        </div>
      </div>
      <div class="end d-flex justify-content-end align-items-center">
        <i class="bx bx-calendar"></i>
        <p class="my-auto ml-2">{{ time }}</p>
        <p class="mx-2 my-auto">|</p>
        <vs-tooltip bottom>
          <vs-button circle icon danger animation-type="rotate">
            <i class="bx bx-group"></i>
            <template #animate>
              <i class="bx bxs-group"></i>
            </template>
          </vs-button>
          <template #tooltip> Permission </template>
        </vs-tooltip>
        <vs-avatar circle size="35" class="my-auto">
          <img src="../assets/man.png" alt="" />
        </vs-avatar>
      </div>
    </div>
    <div class="ln"></div>
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
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");
.top {
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  left: 0;
  z-index: 4;
  .end {
    p {
      font-size: 16px;
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 500;
    }
  }
  .route {
    font-weight: bold;
    a {
      color: rgb(172, 172, 172);
    }
    a.active {
      color: #ff577f;
    }
    a:hover {
      color: #ff577f;
      text-decoration: none;
    }
  }
  .ln {
    width: 100%;
    height: 1px;
    background: black;
  }
}

@media screen and(max-width: 770px) {
  .top {
    h5 {
      font-size: 18px;
    }
  }
  .route {
    margin-top: 0 !important;
    .router-link {
      margin: 0 15px 0 15px !important;
    }
  }
}
</style>