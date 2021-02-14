<template>
  <div>
    <v-card>
      <v-data-table
      id="tabs"
        :items="itemsWithIndex"
        :headers="headers"
        
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
      <v-data-table :items="itemBottom" dense :headers="head" hide-default-footer >
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
        <strong class="font-weight-bold">{{ datas.kota }},<span class="space"></span><span class="font-weight-normal">{{datas.dates}}</span></strong>
      </div>
    </div>
    <div class="row justify-content-end mt-5 dd">
      <div class="col-md-5 mt-3 text-center">
        <p class="mb-n1">Dikeluarkan :</p>
        <strong class="mt-2">{{datas.dik}}</strong>
      </div>
      <div class="col-md-5 mt-3 text-center">
        <p class="mb-n1">Diketahui :</p>
        <strong class="mt-2">{{datas.froms}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import timezone from "moment-timezone";
export default {
  mixins: [Vue2Filters.mixin],
  data: () => {
    return {
      captions: "Hallo World",
      datas: {
        dik: "PT. Ujung Kulon Sukses Makmur Abadi",
        froms: "Mega Lines Bersaudara",
        kota: "Pandeglang",
        dates: null,
      },
      head: [
        {
          text: "No",
          filterable: false,
          sortable: false,
          width: "1%",
          value: "no",
        },
        {
          text: "Ket",
          filterable: false,
          sortable: false,
          width: "80%",
          value: "title",
        },
        {
          text: "Jumlah",
          filterable: false,
          sortable: false,
          width: "50%",
          value: "sum",
        },
      ],
      headers: [
        {
          text: "No",
          filterable: false,
          sortable: false,
          width: "1%",
          value: "index",
          class: "head",
        },
        {
          text: "NIK",
          value: "nik",
          sortable: false,
          width: "5%",
          align: "center",
          class: "head",
        },
        {
          text: "Nama Lengkap",
          value: "nama",
          sortable: false,
          width: "9%",
          class: "head",
        },
        {
          text: "Nama Panggilan",
          value: "nama_panggilan",
          sortable: false,
          align: "center",
          class: "head",
          width: "3%",
        },
        {
          text: "Jabatan",
          value: "jabatan",
          sortable: false,
          class: "head",
          width: "10%",
        },
        {
          text: "Status",
          width: "9%",
          value: "status",
          sortable: false,
          class: "head",
        },
        {
          text: "RPH",
          value: "gaji",
          sortable: false,
          class: "head",
          align: "center",
          width: "11%",
        },
        {
          text: "BPJS Kesehatan",
          class: "head",
          value: "bpjs_kesehatan",
          sortable: false,
          align: "center",
          width: "9%",
        },
        {
          text: "BPJS TenagaKerja",
          value: "bpjs_tenagakerja",
          sortable: false,
          class: "head",
          align: "center",
          width: "9%",
        },
        {
          text: "Status Kesehatan",
          value: "status_kesehatan",
          sortable: false,
          align: "center",
          width: "5%",
          class: "head",
        },
        {
          text: "Status TenagaKerja",
          value: "status_tenagakerja",
          sortable: false,
          class: "head",
          width: "5%",
          align: "center",
        },
        {
          text: "Masa Kerja",
          value: "gaji_total",
          sortable: false,
          width: "11%",
          class: "head",
          align: "center",
        },
      ],
    };
  },
  methods: {
    tableToExcel() {
      var uri = "data:application/vnd.ms-excel;base64,",
        template =
          '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
        base64 = function (s) {
          return window.btoa(unescape(encodeURIComponent(s)));
        },
        format = function (s, c) {
          return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
          });
        };
      return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table);
        var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };
        window.location.href = uri + base64(format(template, ctx));
      };
    },
  },
  created() {
    this.datas.dates = timezone.tz("Asia/Jakarta").format("D MMMM YYYY");
  },
  computed: {
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
.space {
  width: 100px !important;
}
.head {
  background: #b6dde8;
  font-weight: 800;
}
.text-right {
  background: rgb(238, 238, 238);
}
table td + td {
  border-left: 1px solid #dddddd;
}

.tx {
  font-size: 11px;
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