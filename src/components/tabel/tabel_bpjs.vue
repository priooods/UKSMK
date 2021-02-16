<template>
  <div>
    <div class="row py-5" id="mydiv">
      <div class="col-md-1 d-none d-md-block d-lg-block d-xl-block">
        <img src="../../assets/logo_1.jpg" alt="log" />
      </div>
      <div class="col text-center text-uppercase ttl">
        <h4 class="font-weight-bold">
          {{judul}}
        </h4>
        <h5 class="font-weight-bold">
          {{subtitle}}
        </h5>
        <h5 class="font-weight-bold">{{date}}</h5>
      </div>
      <div class="col-md-1 d-none d-md-block d-lg-block d-xl-block cs">
        <img src="../../assets/logo_2.png" alt="log" />
      </div>
    </div>
    <v-card >
      <v-data-table
        :items="tabelfields"
        :headers="models"
        id="tabletops"
        class="row-pointer"
        hide-default-footer
      >
        <template v-slot:[`item.index`]="{ item }">
          <span class="tx">{{ item.index }}</span>
        </template>
        <template v-slot:[`item.nik`]="{ item }">
          <span class="tx">{{ item.nik }}</span>
        </template>
        <template v-slot:[`item.nama`]="{ item }">
          <span class="tx font-weight-bold">{{ item.nama.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.nama_panggilan`]="{ item }">
          <span class="tx">{{ item.nama_panggilan.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.jabatan`]="{ item }">
          <span class="tx">{{ item.jabatan.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <span class="tx">{{ item.status.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.gaji`]="{ item }">
          <span class="tx">{{ item.gaji | currency("Rp. ") }}</span>
        </template>
        <template v-slot:[`item.bpjs_kesehatan`]="{ item }">
          <span class="tx">{{ item.bpjs_kesehatan | currency("Rp. ") }}</span>
        </template>
        <template v-slot:[`item.bpjs_tenagakerja`]="{ item }">
          <span class="tx">{{ item.bpjs_tenagakerja | currency("Rp. ") }}</span>
        </template>
        <template v-slot:[`item.status_kesehatan`]="{ item }">
          <span class="tx">{{ item.status_kesehatan.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.status_tenagakerja`]="{ item }">
          <span class="tx">{{ item.status_tenagakerja.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.gaji_total`]="{ item }">
          <span class="tx">{{ item.gaji | currency("Rp. ") }}</span>
        </template>
        <template v-slot:[`body.append`]>
          <tr :class="{ 'v-data-table__mobile-table-row': isMobile }">
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right bc"
            > 
              <td
              v-text="$store.state.karyawanUser.length"
              class="font-weight-bold fot0"
            />
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{'v-data-table__mobile-row' : isMobile }"
              class="text-right bc"
            > 
              <td></td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{'v-data-table__mobile-row' : isMobile }"
              class="text-right bc"
            > 
              <td></td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right cb"
            > 
              <td>Total</td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right bc"
            > 
              <td></td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right bc"
            > 
              <td></td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right"
            > <span class="sp">Gaji</span>
              <td class="font-weight-bold fot2">
              {{ sumgaji | currency("Rp. ") }}
            </td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right"
            > <span class="sp">BPJS Kesehatan</span>
              <td class="font-weight-bold fot2">
              {{ sumkesehatan | currency("Rp. ") }}
            </td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right"
            > <span class="sp">BPJS TenagaKerja</span>
              <td class="font-weight-bold fot2">
              {{ sumkerja | currency("Rp. ") }}
            </td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right"
            > <span class="sp">Status Kesehatan</span>
              <td class="font-weight-bold fot2">Rp. -</td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right"
            > <span class="sp">Status TenagaKerja</span>
              <td class="font-weight-bold fot2">Rp. -</td>
            </th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-right"
            > <span class="sp">Masa Kerja</span>
              <td class="font-weight-bold fot2">
              {{ sumtotal | currency("Rp. ") }}
            </td>
            </th>
          </tr>
          <tr :class="{ 'v-data-table__mobile-table-row': isMobile }">
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left cb"
            ><td>Keterangan :</td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left bc"
            ><td></td></th>
          </tr>
        </template>
      </v-data-table>
      <v-data-table :items="itemBottom" dense :headers="totals"  hide-default-footer class="row-pointer" >
        <template v-slot:[`item.title`]="{ item }">
          <span class="tx tc">{{ item.title.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.sum`]="{ item }">
          <span class="tx font-weight-bold">{{ item.sum | currency("Rp. ") }}</span>
        </template>
      </v-data-table>
    </v-card>
    <div class="row justify-content-end mt-5 dd">
      <div class="col-md-3 mt-3 text-center">
        <strong class="font-weight-bold">{{ kota }},<span class="space"></span><span class="font-weight-normal">{{tanggal_pengesahan}}</span></strong>
      </div>
    </div>
    <div class="row justify-content-end mt-5 dd">
      <div class="col-md-5 mt-5 text-center">
        <p class="mb-n1">Dikeluarkan :</p>
        <strong class="mt-2">{{diketahui}}</strong>
      </div>
      <div class="col-md-5 mt-5 text-center">
        <p class="mb-n1">Diketahui :</p>
        <strong class="mt-2">{{from}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import model from "../../singleton/models_table";
export default {
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      check: model,
    };
  },
  props: {
    models: {
      type: Array,
    },
    totals: {
      type: Array,
    },
    pengesahan: {
      dik: String,
      froms: String,
      kota: String,
      dates: String,
    },
    judul: null,
    subtitle: null,
    date: null,
    diketahui: String,
    from: String,
    kota: String,
    tanggal_pengesahan: null,
    tabelfields: {
      type: Array,
    },
  },
  computed: {
    concat() {
      return this.itemsWithIndex.concat(this.itemBottom);
    },
    isMobile() {
      return this.$vuetify.breakpoint.name === "xs";
    },
    itemBottom() {
      return this.vls.map((item, index) => ({
        no: index + 1,
        ...item,
      }));
    },
    itemsWithIndex() {
      return this.$store.state.karyawanUser.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
    sumgaji() {
      let sum = 0;
      this.$store.state.karyawanUser.forEach((e) => {
        sum += parseInt(e.gaji);
      });
      return sum;
    },
    sumkesehatan() {
      let sum = 0;
      this.$store.state.karyawanUser.forEach((e) => {
        sum += parseInt(e.bpjs_kesehatan);
      });
      return sum;
    },
    sumkerja() {
      let sum = 0;
      this.$store.state.karyawanUser.forEach((e) => {
        sum += parseInt(e.bpjs_tenagakerja);
      });
      return sum;
    },
    sumtotal() {
      let sum = 0;
      this.$store.state.karyawanUser.forEach((e) => {
        sum += parseInt(e.gaji);
      });
      return sum;
    },
    vls() {
      let dt = [
        {
          title: "PEMBAYARAN GAJI KARYAWAN",
          sum: this.sumgaji,
        },
        {
          title: "PEMBAYARAN BPJS KESEHATAN",
          sum: this.sumkesehatan,
        },
        {
          title: "PEMBAYARAN BPJS KETENAGAKERJAAN",
          sum: this.sumkerja,
        },
        {
          title: "SUB TOTAL 1+2+3",
          sum: this.sumgaji + this.sumkesehatan + this.sumkerja,
        },
        {
          title: "SUB TOTAL GAJI POKOK + UANG MAKAN",
          sum: 0,
        },
      ];
      return dt;
    },
  },
};
</script>

<style lang="scss">
table.v-table {
  thead {
    th {
      white-space: normal;
    }
  }
}
.text-right {
  background: rgb(238, 238, 238);
}
// table td + td {
//   border-left: 1px solid #dddddd;
// }
.row-pointer {
  border-left: 1px solid #dddddd;
}

.tc {
  font-style: italic;
  font-weight: bold;
  color: red;
}

.fot2 {
  text-align: center !important;
  font-size: 11px !important;
}
.sp {
  display: none;
}
.text-bot {
  width: 10px !important;
}

.dd {
  strong {
    font-size: 14px;
  }
}

@media screen and (max-width: 700px) {
  .bc {
    display: none !important;
  }
  .cb {
    background: #dddddd;
  }
  .sp {
    display: block;
  }
}
</style>