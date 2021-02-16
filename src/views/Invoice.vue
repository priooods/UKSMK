<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-4" v-if="active">
        <h2 class="font-weight-bold">Cetak Invoice</h2>
        <p>
          Mulai mencetak invoice anda. click isi form
          <br />
          untuk mengisi data invoice
        </p>
        <div class="row">
          <vs-button
            primary
            class="text-center col"
            @click.native="active = !active"
            >Isi Form</vs-button
          >
          <vs-button danger class="text-center col mt-2" to="/karyawan"
            >Cancel</vs-button
          >
        </div>
      </div>
      <div class="col-md-4 sw" v-else>
        <div class="row justify-content-end">
          <vs-button
            circle
            icon
            primary
            :active="active == 1"
            @click.native="active = !active"
          >
            <i class="bx bx-x"></i>
          </vs-button>
        </div>

        <h5 class="font-weight-bold">Isi Form Sesuai Data</h5>
        <p>
          Semua data yang diisi pada form dapat dilihat langsung pada invoice
        </p>
        <v-text-field
          class="mt-3"
          v-model="data.nomerInvoice"
          outlined
          background-color="white"
          dense
          label="Nomer Invoice"
        ></v-text-field>
        <v-text-field
          v-model="data.lokasiUK"
          outlined
          background-color="white"
          dense
          label="Lokasi UK"
        ></v-text-field>
        <h5 class="font-weight-bold">Staff Management</h5>
        <p class="mt-3 font-weight-bold text-danger">Gaji Pokok Admin/HRD --</p>
        <v-text-field
          class="mt-3"
          v-model="items[20].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items[20].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="(items[20].jumlah = items[20].volume * items[20].upah)"
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">Gaji Pokok Pengawas --</p>
        <v-text-field
          v-model="items[21].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items[21].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="(items[21].jumlah = items[21].volume * items[21].upah)"
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">BPJS Kesehatan --</p>
        <v-text-field
          v-model="items[22].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items[22].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="(items[22].jumlah = items[22].volume * items[22].upah)"
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">BPJS KetenagaKerjaan --</p>
        <v-text-field
          v-model="items[23].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items[23].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="(items[23].jumlah = items[23].volume * items[23].upah)"
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items[24].jumlah =
              items[20].jumlah +
              items[21].jumlah +
              items[22].jumlah +
              items[23].jumlah)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <h5 class="font-weight-bold">ATK & Transportasi</h5>
        <p class="mt-3 font-weight-bold text-danger">ATK --</p>
        <v-text-field
          v-model="items[26].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items[26].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          v-model="items[26].jumlah"
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">Transportasi --</p>
        <v-text-field
          v-model="items[27].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items[27].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          v-model="items[27].jumlah"
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="(items[28].jumlah = items[26].jumlah + items[27].jumlah)"
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
      </div>
      <div class="col card mt-5">
        <div class="d-block">
          <div class="row p-2">
            <div class="col">
              <div class="row justify-content-end align-items-center">
                <div class="d-block ml-auto mr-auto text-center m2">
                  <h4 class="font-weight-bold">I n v o i c e</h4>
                  <p class="mt-n2">Nomor : {{ data.nomerInvoice }}</p>
                </div>
                <div
                  class="d-md-block d-lg-block d-xl-block d-sm-block d-none text-center mr-2 mt-2"
                >
                  <img src="../assets/logo_1.jpg" alt="" />
                  <p>Mega Line Bersaudara</p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-block slm mt-n5">
            <p>
              Kepada Yth, <br />Pimpinan Direktur <br /><strong
                >PT. Ujung Kulon Sukses Makmur Abadi</strong
              ><span class="d-flex justify-content-top align-items-top">
                <span>Lokasi :</span>
                <span
                  >Tambak UK {{ data.lokasiUK }} Kp. Cisaat R.002 Rw.005
                  <br />Kel.Taman Jaya Kec. Sumur <br />Kota Pandeglang -
                  Banten</span
                >
              </span>
            </p>
          </div>
          <v-data-table
            :items="items"
            class="row-pointer"
            :headers="headersTable"
            :item-class="row_classes"
            dense
            :items-per-page="100"
            hide-default-footer
          >
            <template v-slot:[`item.jumlah`]="{ item }">
              <span class="tx">{{ item.jumlah | currency("Rp. ") }}</span>
            </template>
            <template v-slot:[`item.upah`]="{ item }">
              <span class="tx">{{ item.upah | currency("Rp. ") }}</span>
            </template>
            <!-- <template v-slot:[`beetwen`]>
          <tr :class="{ 'v-data-table__mobile-table-row': isMobile }">
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left cb"
            ><td>Keterangan :</td></th>
          </tr>
        </template> -->
            <!-- <template v-slot:[`body.append`]>
          <tr :class="{ 'v-data-table__mobile-table-row': isMobile }">
            <th
              :colspan="`${isMobile ? 6 : 1}`"
              :class="{ 'v-data-table__mobile-row' : isMobile }"
              class="text-left cb"
            ><td>Keterangan :</td></th>
          </tr>
        </template> -->
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datas from "../singleton/models_invoice";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      items: datas,
      active: true,
      data: {
        nomerInvoice: "",
        lokasiUK: "",
      },
      headersTable: [
        {
          text: "No",
          align: "center",
          filterable: false,
          sortable: false,
          width: "1%",
          value: "index",
          class: "head",
        },
        {
          text: "Uraian Take Home Pay",
          align: "start",
          filterable: false,
          sortable: false,
          value: "uraian",
          width: "40%",
          class: "head",
        },
        {
          text: "Vol",
          align: "center",
          filterable: false,
          sortable: false,
          width: "1%",
          value: "volume",
          class: "head",
        },
        {
          text: "Satuan",
          align: "center",
          width: "1%",
          filterable: false,
          sortable: false,
          value: "satuan",
          class: "head",
        },
        {
          text: "Bulan",
          align: "center",
          filterable: false,
          sortable: false,
          value: "bulan",
          width: "1%",
          class: "head",
        },
        {
          text: "%",
          align: "center",
          filterable: false,
          sortable: false,
          value: "persen",
          class: "head",
        },
        {
          text: "Upah",
          align: "start",
          filterable: false,
          sortable: false,
          value: "upah",
          width: "18%",
          class: "head",
        },
        {
          text: "Jumlah",
          align: "start",
          filterable: false,
          sortable: false,
          width: "18%",
          value: "jumlah",
          class: "head",
        },
      ],
    };
  },
  computed: {
    getall() {
      return this.$store.state.ukone.map((c) => {
        return c.bpjs_kesehatan;
      });
    },
    filteredAndSorted() {
      return this.$store.state.ukone.filter((user) => {
        return user.bpjs_kesehatan != "0";
      });
    },
  },
  mounted() {
    // var dd = this.getall.filter((event) => {
    //   event.bpjs_kesehatan.toLowerCase().includes("0");
    // });
    // console.log(this.getall);
    // console.log(this.filteredAndSorted);
  },
  methods: {
    row_classes(item) {
      if (item.satuan === null) {
        return "color"; //can also return multiple classes e.g ["orange","disabled"]
      }
    },
  },
};
</script>

<style lang="scss">
.color {
  font-weight: bold;
  color: black;
}
.mt-2 {
  :nth-child(2) {
    color: rgb(0, 212, 212);
    font-weight: bold;
    font-size: 12px;
    margin-top: 4px;
  }
}
.m2 {
  :nth-child(1) {
    text-decoration: underline;
  }
  :nth-child(2) {
    font-size: 12px;
  }
}
.slm {
  :nth-child(1) {
    font-size: 13px;
  }
}
</style>