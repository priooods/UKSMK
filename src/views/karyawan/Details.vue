<template>
  <v-card
    class="overflow-hidden"
  >
    <v-toolbar
      flat
      color="white"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        Karyawan Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
      <v-text-field
        :value="$store.state.userDetail.nama"
        :readonly="true"
        label="Nama Lengkap"
      ></v-text-field>
        </v-col>
      
        <v-col
          cols="12"
          sm="6"
        >
        <v-text-field
        :value="$store.state.userDetail.nik"
        :readonly="true"
        label="NIK"
      ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        :value="$store.state.userDetail.jabatan"
        :readonly="true"
        label="Jabatan"
      ></v-text-field>
      <v-text-field
        :value="$store.state.userDetail.status"
        :readonly="true"
        label="Status"
      ></v-text-field>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
      <vuetify-money
        :value="$store.state.userDetail.gaji"
        :readonly="true"
        label="Gaji"
      ></vuetify-money>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
      <vuetify-money
        :value="$store.state.userDetail.uang_makan"
        :readonly="true"
        label="Uang Makan"
      ></vuetify-money>
        </v-col>
      </v-row>
      <vuetify-money
        :value="$store.state.userDetail.bpjs_kesehatan"
        :readonly="true"
        label="BPJS Kesehatan"
      ></vuetify-money>
      <vuetify-money
        :value="$store.state.userDetail.bpjs_tenagakerja"
        :readonly="true"
        label="BPJS Ketenaga Kerjaan"
      ></vuetify-money>
      <vuetify-money
        :value="$store.state.userDetail.gaji_total"
        :readonly="true"
        label="BPJS Total"
      ></vuetify-money>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Details",
  mounted() {
    console.log(this.$store.getters.userDetail);
  },
};
</script>

<style>
</style>