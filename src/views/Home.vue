<template>
  <div class="about">
  <div class="row">
  <div class="col-md-5 col-mb-4">
    <h1>Welcome Back!</h1>
    <p>
      Anda berada dalam beranda aplikasi UKSMK.
    </p>
    <p>
      Saat ini halaman utama sedang dilakukan penyesuaian. Harap menunggu update
      selanjutnya untuk menggunakan semua fitur yang akan disediakan
    </p>
    </div>
  <div>
    <!-- <p class="col-md-5">
      Saat ini halaman utama sedang dilakukan penyesuaian. Harap menunggu update
      selanjutnya untuk menggunakan semua fitur yang akan disediakan
    </p>
    <p class="col-md-5">
      Untuk saat ini silahkan menggunakan menu Karyawan untuk menambahkan data
      karyawan
    </p> -->
    <v-card
    height="100%"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{this.$store.state.karyawanUser.length}} Active Users
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
          <v-list-item-content>
            <chart :options="chartOptionsBar"></chart>
          </v-list-item-content>
          <v-list-item-content>
            <v-btn
              color="primary"
              depressed
            >
              <v-icon left>mdi-plus</v-icon>
              <span>Tambahkan Admin</span>
            </v-btn>
          </v-list-item-content>
          <v-list-item-content>
            <v-btn
              class="ma-2"
              color="purple"
              dark  
            >
              <v-icon dark left>
                mdi-wrench
              </v-icon>
            <span>  Tambah Karyawan </span>
            </v-btn>
          </v-list-item-content>
      </v-list>
    </v-navigation-drawer>
  </v-card>
    </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
    chartOptionsBar: {
      xAxis: {
        data: ['UK I', 'UK II', 'UK III']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          data: [5, 1, 0]
        }
      ]
    }
  })
};
</script>

<style lang="scss">
.in {
  margin-top: -20px;
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