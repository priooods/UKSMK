<template>
  <div class="lt d-flex justify-content-center align-items-center">
    <div class="box">
      <h1 class="mb-5 font-weight-bold">UKSMK</h1>
      <div class="form">
        <vs-input v-model="form.nama" label="Username" icon-after>
          <template #icon>
            <i class="bx bx-user"></i>
          </template>
        </vs-input>
        <vs-input
          class="pass"
          type="password"
          v-model="form.password"
          label="Password"
          :visiblePassword="visible"
          icon-after
          @click-icon="visible = !visible"
        >
          <template #icon>
            <i v-if="!visible" class="bx bx-hide"></i>
            <i v-else class="bx bx-show-alt"></i>
          </template>
        </vs-input>
      </div>
      <vs-button color="#21209c" v-on:click="goLogin()"> Masuk </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nama: "",
        password: "",
      },
      visible: false,
      data: [],
      router: null,
    };
  },
  methods: {
    goLogin() {
      if (this.form.nama == "" || this.form.password == "") {
        return this.openNotificationWithIcon(
          "error",
          "topLeft",
          "Harap lengkapi Username dan Password anda untuk masuk dengan account anda"
        );
      }
      this.$store.state.loginForm = this.form;
      this.$store.dispatch("login");

      // return this.$router.push({ path: "home" }, () => {
      //   this.$store.dispatch("myprofile");
      // });
    },
    openNotificationWithIcon(type, placement, description) {
      this.$notification[type]({
        message: "Ooops.. Failure Log in !",
        placement,
        description,
      });
    },
  },
};
</script>

<style lang="scss">
.lt {
  height: 100vh;
  h1 {
    text-align: center;
  }
  .form,
  .vs-input,
  .vs-button {
    font-size: 14px;
    width: 250px;
  }
  .pass,
  .vs-button {
    margin-top: 35px;
  }
}
</style>