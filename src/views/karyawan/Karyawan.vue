<template>
  <div>
    <div class="d-block in">
      <div class="row mt-5 mb-5">
        <div class="col-md-3">
          <v-card elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  ALL
                </v-list-item-title>
                <v-list-item-subtitle
                  >Jumlah Semua Karyawan</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar size="40"
                ><span style="font-size: 30px">{{
                  $store.state.karyawanUser.length
                }}</span></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
        </div>
        <div class="col-md-3">
          <v-card elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  UK I
                </v-list-item-title>
                <v-list-item-subtitle
                  >Jumlah Semua Karyawan</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar size="40"
                ><span style="font-size: 30px">{{
                  $store.state.ukone.length
                }}</span></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
        </div>
        <div class="col-md-3">
          <v-card elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  UK II
                </v-list-item-title>
                <v-list-item-subtitle
                  >Jumlah Semua Karyawan</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar size="40"
                ><span style="font-size: 30px">{{
                  $store.state.uktwo.length
                }}</span></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
        </div>
        <div class="col-md-3">
          <v-card elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  UK III
                </v-list-item-title>
                <v-list-item-subtitle
                  >Jumlah Semua Karyawan</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar size="40"
                ><span style="font-size: 30px">{{
                  $store.state.ukthree.length
                }}</span></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
        </div>
      </div>
      <div class="row justify-content-end align-items-center mb-5">
        <h6 class="col-md-4 mr-auto">Tabel {{ cek }}</h6>
        <vs-button
          primary
          :active="active == 1"
          to="karyawan/add"
          class="col-md-2 p-0"
        >
          Tambah Karyawan Baru
        </vs-button>
      </div>
      <tabelkaryawan />
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import tabelkaryawan from "../../components/tabel/tabel_karyawan";
export default {
  components: { tabelkaryawan },
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      cek: "Semua Karyawan",
      total: {
        all: 0,
        uk1: 0,
        uk2: 0,
        uk3: 0,
      },
      active: 0,
    };
  },
  created() {
    this.all = this.$store.state.karyawanUser.length;
    this.uk1 = this.$store.state.ukone.length;
    this.uk2 = this.$store.state.uktwo.length;
    this.uk3 = this.$store.state.ukthree.length;
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap");

.in {
  margin-top: 20px;
  h6 {
    font-size: 25px;
    font-weight: 700;
    color: #252525;
    font-family: "Montserrat", sans-serif;
  }
}
@media screen and(max-width: 700px) {
}
@media screen and(max-width: 1190px) {
}
</style>