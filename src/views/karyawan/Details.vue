<template>
  <v-card class="overflow-hidden">
    <v-toolbar flat color="white">
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        Karyawan Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            :value="form.nama"
            v-model="form.nama"
            :readonly="read"
            label="Nama Lengkap"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            :value="form.nik"
            v-model="form.nik"
            :readonly="read"
            label="NIK"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        :value="form.jabatan"
        v-model="form.jabatan"
        :readonly="read"
        label="Jabatan"
      ></v-text-field>
      <v-text-field
        :value="form.status"
        v-model="form.status"
        :readonly="read"
        label="Status"
      ></v-text-field>
      <v-row>
        <v-col cols="12" sm="6">
          <vuetify-money
            :value="form.gaji"
            v-model="form.gaji"
            :readonly="read"
            label="Gaji"
          ></vuetify-money>
        </v-col>
        <v-col cols="12" sm="6">
          <vuetify-money
            :value="form.uang_makan"
            v-model="form.uang_makan"
            :readonly="read"
            label="Uang Makan"
          ></vuetify-money>
        </v-col>
      </v-row>
      <vuetify-money
        :value="form.bpjs_kesehatan"
        :readonly="read"
        v-model="form.bpjs_kesehatan"
        label="BPJS Kesehatan"
      ></vuetify-money>
      <vuetify-money
        :value="form.bpjs_tenagakerja"
        v-model="form.bpjs_tenagakerja"
        :readonly="read"
        label="BPJS Ketenaga Kerjaan"
      ></vuetify-money>
      <vuetify-money
        v-model="form.gaji_total"
        :value="form.gaji_total"
        :readonly="read"
        label="BPJS Total"
      ></vuetify-money>
    </v-card-text>
    <div class="row align-items-center mr-2" v-if="read">
      <v-btn @click="read = !read" color="primary" class="col-md-2 mt-3 ml-2"
        >Click Update</v-btn
      >
      <v-btn color="error" to="/karyawan" class="col-md-2 mt-3 ml-2"
        >Back</v-btn
      >
    </div>
    <div class="row align-items-center mr-2" v-else>
      <v-btn @click="read = !read" color="error" class="col-md-2 mt-3 ml-2"
        >cancel Update</v-btn
      >
      <v-btn class="col-md-2 mt-3 ml-2" @click="updated" color="success"
        >Save Update</v-btn
      >
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      read: true,
      form: {
        token: null,
        nama: "",
        password: "",
        nama_panggilan: "",
        jabatan: "",
        nik: "",
        status: "",
        bpjs_kesehatan: "",
        bpjs_tenagakerja: "",
        status_kesehatan: "",
        status_tenagakerja: "",
        gaji: "",
        no_id: "",
        nama_perusahaan: "CV MEGA LINES BERSAUDARA",
        nama_rekening: "",
        uk: "",
        cif: "",
        tipe_id: "",
        no_rekening: "",
        uang_makan: "",
        tanggal_lahir: "",
        log: "",
        gaji_total: null,
        level: "4",
        gender: "",
      },
    };
  },
  methods: {
    updated() {
      return this.$store.dispatch(
        "updateuser",
        this.$store.state.userDetail.id,
        this.form
      );
    },
  },
  mounted() {
    this.form = this.$store.state.userDetail;
  },
};
</script>

<style>
</style>