<template>
  <div class="home">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center mt-5">
        <div class="center-block">
          <h3>
            <strong>Welcome Back! {{ $store.state.myprofile.nama }}</strong>
          </h3>
          <p>Anda berada dalam beranda aplikasi MLB SYSTEM.</p>
          <h5>
            <strong>Pengguna Active saat ini {{ active - 1 }}</strong>
          </h5>
          <div class="row justify-content-center mx-1">
            <div class="d-block w-100">
              <div class="d-flex justify-content-start align-items-center">
                <h4>
                  <strong class="text-danger">Gunakan Menu Pintasan</strong>
                </h4>
                <div class="ml-auto">
                  <vs-button
                    circle
                    v-if="sblock"
                    icon
                    primary
                    flat
                    @click="sblock = !sblock"
                  >
                    <i class="bx bx-minus"></i>
                  </vs-button>
                  <vs-button
                    circle
                    icon
                    v-else
                    primary
                    flat
                    @click="sblock = !sblock"
                  >
                    <i class="bx bx-plus"></i>
                  </vs-button>
                </div>
              </div>
              <div v-if="sblock">
                <div class="d-flex justify-content-end mt-5 text-align-center">
                  <h5 class="mr-auto"><strong>Kelola Pengguna</strong></h5>
                  <div>
                    <vs-button
                      circle
                      v-if="show.users"
                      icon
                      primary
                      flat
                      @click="show.users = !show.users"
                    >
                      <i class="bx bx-minus"></i>
                    </vs-button>
                    <vs-button
                      circle
                      icon
                      v-else
                      primary
                      flat
                      @click="show.users = !show.users"
                    >
                      <i class="bx bx-plus"></i>
                    </vs-button>
                  </div>
                </div>
                <div class="tp" v-show="show.users">
                  <p>
                    <strong class="text-danger">Tambah Pengguna</strong
                    ><br />Mulai Tambah pengguna baru
                  </p>
                  <div class="row justify-content-center">
                    <vs-button primary class="col" to="karyawan/add"
                      >New Karyawan</vs-button
                    >
                    <vs-button danger class="col" @click="showOperator"
                      >New Operator</vs-button
                    >
                  </div>
                </div>
              </div>
              <div v-if="sblock" class="pt-5">
                <div class="d-flex justify-content-end text-align-center">
                  <h5 class="mr-auto mt-1"><strong>Kelola Data</strong></h5>
                  <div class="mt-1">
                    <vs-button
                      circle
                      v-if="show.data"
                      icon
                      primary
                      flat
                      @click="show.data = !show.data"
                    >
                      <i class="bx bx-minus"></i>
                    </vs-button>
                    <vs-button
                      circle
                      icon
                      v-else
                      primary
                      flat
                      @click="show.data = !show.data"
                    >
                      <i class="bx bx-plus"></i>
                    </vs-button>
                  </div>
                </div>
                <div class="tp" v-show="show.data">
                  <p>
                    <strong class="text-danger">Lihat Detail Data</strong
                    ><br />Lihat semua data penting
                  </p>
                  <div class="row justify-content-center">
                    <vs-button primary class="col" @click="showdt"
                      >Lihat Grafik</vs-button
                    >
                    <vs-button danger class="col" @click="showdt"
                      >Lihat Rekening</vs-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 mt-5">
        <div v-show="show.table">
          <h6><strong>Gafik Data</strong></h6>
          <p class="mt-3">
            Lihat semua grafik data karyawan atau pengguna yang telah terdaftar
            saat ini
          </p>
          <canvas id="planet-chart" class="my-3"></canvas>
        </div>
        <div v-show="show.rekening">
          <div class="row justify-content-end mb-5 align-items-center">
            <div class="col">
              <h6><strong>Tabel Rekening</strong></h6>
              <p class="mt-3">Lihat semua tabel data rekening karyawan</p>
            </div>
            <vs-button class="mt-3 col-md-2 mb-auto" success>
              <vue-excel-xlsx
                :data="itemsWithIndex"
                :columns="headers"
                :filename="'Table Data'"
                :sheetname="'Table Data'"
                >Excel</vue-excel-xlsx
              >
            </vs-button>
          </div>
          <rekeningTable :head="headers" :item="itemsWithIndex"></rekeningTable>
        </div>
        <div v-show="show.operator">
          <newOperator />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rekeningTable from "../views/Table_Rekening.vue";
import newOperator from "../views/karyawan/New_Operators";
import Chart from "chart.js";
import table from "../singleton/models_rekening";
import planetChartData from "../singleton/chart";
export default {
  name: "Home",
  components: { rekeningTable, newOperator },
  computed: {
    getactive() {
      return this.$store.state.karyawanUser.filter((e) => {
        return e.log != "0";
      });
    },
    itemsWithIndex() {
      return this.$store.state.karyawanUser.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      return myChart;
    },
    showdt() {
      if (!this.show.table) {
        this.show.table = true;
        this.show.rekening = false;
        this.show.operator = false;
      } else {
        this.show.table = false;
        this.show.rekening = true;
        this.show.operator = false;
      }
    },
    showOperator() {
      if (!this.show.operator) {
        this.show.operator = true;
        this.show.table = false;
        this.show.rekening = false;
      } else this.showdt;
    },
  },
  created() {
    this.$store.dispatch("myprofile");
  },
  mounted() {
    this.getactive;
    this.profile = this.$store.state.myprofile;
    this.access = this.$store.state.myprofile.level;
    this.active = this.getactive.length;
    this.createChart("planet-chart", this.planetChartData);
  },
  data: () => ({
    profile: null,
    access: null,
    active: null,
    sblock: false,
    headers: table,
    show: {
      users: false,
      data: false,
      rekening: false,
      table: true,
      operator: false,
    },
    planetChartData: planetChartData,
  }),
};
</script>

<style lang="scss">
.in {
  margin-top: -20px;
}
.mx-1 {
  margin-top: 40px !important;
}
.chart-wrapper {
  width: 100%;
  height: 100px;
}
.echarts {
  width: 100px;
  height: 200px;
}
</style>