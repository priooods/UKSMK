<template>
  <div>
    <v-form lazy-validation class="row" ref="form">
      <h3 class="col-md-8 mb-n4"><strong>Tambah Operator Baru</strong></h3>
      <p class="col-md-10 mb-4">
        Masukan informasi lengkap dari Operator sesuai form
      </p>
      <div class="field col-md-4 mt-n5">
        <v-text-field
          required
          v-model="form.nama"
          outlined
          background-color="white"
          :rules="rules.nama"
          dense
          label="Nama Lengkap"
        ></v-text-field>
      </div>
      <div class="field col-md-4 mt-n5">
        <v-text-field
          required
          outlined
          v-model="form.password"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
          :rules="rules.password"
          background-color="white"
          dense
          label="Password"
        ></v-text-field>
      </div>
      <div class="field col-md-4 mt-n5">
        <v-text-field
          required
          :rules="rules.nama_panggilan"
          outlined
          v-model="form.nama_panggilan"
          background-color="white"
          dense
          label="Nama Panggilan"
        ></v-text-field>
      </div>
      <div class="field col-md-4 mt-n5">
        <v-text-field
          required
          :rules="rules.status"
          outlined
          background-color="white"
          v-model="form.status"
          dense
          label="Status Operator"
        ></v-text-field>
      </div>
      <div class="field col-md-3 mt-n5">
        <v-select
          label="Level"
          :items="items.level"
          item-text="state"
          item-value="abbr"
          v-model="form.level"
          required
          dense
          background-color="white"
          outlined
        ></v-select>
      </div>
    </v-form>
    <div class="row mx-2">
      <vs-button success class="col-md-3" @click="AddOperator"
        >Tambah Operator</vs-button
      >
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      rules: {
        nama: [(v) => !!v || "Masukan nama lengkap karyawan"],
        status: [(v) => !!v || "Masukan status Operator"],
        password: [
          (v) => !!v || "Masukan password karyawan",
          (v) => v.length >= 6 || "Min 6 characters",
        ],
        nama_panggilan: [(v) => !!v || "Masukan nama panggilan"],
        level: [(v) => !!v || "Harap pilih tanggal lahir"],
      },
      form: {
        token: null,
        nama: "",
        password: "user123",
        nama_panggilan: "",
        status: "",
        level: "",
        log: "0",
      },
      items: {
        level: [
          { state: "Admin", abbr: "1" },
          { state: "Operator", abbr: "2" },
        ],
      },
      show: false,
    };
  },
  methods: {
    AddOperator() {
      this.form.token = this.$store.state.response.token;
      this.$store.state.karyawanForm = this.form;
      if (!this.$refs.form.validate()) {
        return false;
      } else {
        this.$store.dispatch("newoperator");
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style>
</style>