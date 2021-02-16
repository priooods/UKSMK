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
            <v-card-actions
              ><v-btn
                text
                color="deep-purple accent-4"
                @click="showTable((statusTabel = 0))"
              >
                Lihat Semua
              </v-btn></v-card-actions
            >
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
            <v-card-actions
              ><v-btn
                text
                color="deep-purple accent-4"
                @click="showTable((statusTabel = 1))"
              >
                Lihat Semua
              </v-btn></v-card-actions
            >
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
            <v-card-actions
              ><v-btn
                text
                color="deep-purple accent-4"
                @click="showTable((statusTabel = 2))"
              >
                Lihat Semua
              </v-btn></v-card-actions
            >
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
            <v-card-actions
              ><v-btn
                text
                color="deep-purple accent-4"
                @click="showTable((statusTabel = 3))"
              >
                Lihat Semua
              </v-btn></v-card-actions
            >
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
      <tabelkaryawan ref="tabel" :data="data" />
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import tabelkaryawan from "../../components/tabel/tabel_karyawan";
export default {
  components: { tabelkaryawan },
  mixins: [Vue2Filters.mixin],
  name: "karyawan",
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
      statusTabel: 0,
      data: null,
    };
  },
  created() {
    this.all = this.$store.state.karyawanUser.length;
    this.data = this.$store.state.karyawanUser;
    this.uk1 = this.$store.state.ukone.length;
    this.uk2 = this.$store.state.uktwo.length;
    this.uk3 = this.$store.state.ukthree.length;
  },
  methods: {
    showTable() {
      switch (this.statusTabel) {
        case 0:
          this.data = this.$store.state.karyawanUser;
          break;
        case 1:
          this.data = this.$store.state.ukone;
          break;
        case 2:
          this.data = this.$store.state.uktwo;
          break;
        case 3:
          this.data = this.$store.state.ukthree;
          break;
      }
    },
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