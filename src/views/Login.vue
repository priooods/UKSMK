<template>
  <div class="lt container">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-3 p-lg-0 p-sm-0 p-md-0">
        <h5 class="mb-5 font-weight-bold" style="color: #195bff">UKSMK</h5>
        <h4 class="font-weight-bold">Log in to your account</h4>
        <p class="dsc">
          Masukan nama lengkap dan password anda dengan benar. Hubungi Operator
          apabila anda melupakan detail account anda
        </p>
        <template>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="form.nama"
              :rules="nameRules"
              class="field"
              outlined
              label="Nama Lengkap"
              dense
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              :rules="passwordRules"
              label="Password"
              outlined
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              dense
              class="field"
            ></v-text-field>
          </v-form>
          <v-btn class="mt-4" depressed color="primary" block @click="goLogin">
            Login
          </v-btn>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      form: {
        nama: "",
        password: "",
      },
      valid: false,
      nameRules: [(v) => !!v || "Masukan nama anda"],
      passwordRules: [(v) => !!v || "Masukan password anda"],
    };
  },
  methods: {
    goLogin() {
      if (!this.$refs.form.validate()) {
        return false;
      }
      this.$store.state.loginForm = this.form;
      return this.$store.dispatch("login");
    },
  },
};
</script>

<style lang="scss">
.lt {
  height: 100vh;
  .dsc {
    margin-bottom: 30px;
    margin-top: 15px;
    font-size: 13px;
  }
  .field {
    font-size: 13px;
  }
}
</style>