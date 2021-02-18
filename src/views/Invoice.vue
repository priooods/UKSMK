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
          <vs-button success class="text-center col" @click.native="printPDF"
            >Print</vs-button
          >
        </div>
      </div>
      <div class="col sw" v-else>
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
          v-model="items.data[20].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items.data[20].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[20].jumlah =
              items.data[20].volume * items.data[20].upah)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">Gaji Pokok Pengawas --</p>
        <v-text-field
          v-model="items.data[21].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items.data[21].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[21].jumlah =
              items.data[21].volume * items.data[21].upah)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">BPJS Kesehatan --</p>
        <v-text-field
          v-model="items.data[22].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items.data[22].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[22].jumlah =
              items.data[22].volume * items.data[22].upah)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">BPJS KetenagaKerjaan --</p>
        <v-text-field
          v-model="items.data[23].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items.data[23].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[23].jumlah =
              items.data[23].volume * items.data[23].upah)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[24].jumlah =
              items.data[20].jumlah +
              items.data[21].jumlah +
              items.data[22].jumlah +
              items.data[23].jumlah)
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
          v-model="items.data[26].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items.data[26].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[26].jumlah =
              items.data[26].volume * items.data[26].upah)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">Transportasi --</p>
        <v-text-field
          v-model="items.data[27].volume"
          outlined
          type="number"
          background-color="white"
          dense
          label="Volume"
        ></v-text-field>
        <v-text-field
          v-model="items.data[27].upah"
          outlined
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[27].jumlah =
              items.data[27].upah * items.data[27].volume)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <v-text-field
          :v-model="
            (items.data[28].jumlah =
              items.data[26].jumlah + items.data[27].jumlah)
          "
          outlined
          v-show="false"
          type="number"
          background-color="white"
          dense
          label="Upah"
        ></v-text-field>
        <h5 class="font-weight-bold mb-5">Result</h5>
        <v-text-field
          v-model="keterangan"
          outlined
          background-color="white"
          dense
          label="Keterangan"
        ></v-text-field>
        <v-text-field
          v-model="direktur"
          outlined
          background-color="white"
          dense
          label="Nama Direktur"
        ></v-text-field>
        <p class="mt-3 font-weight-bold text-danger">Rekening</p>
        <v-text-field
          v-model="rekening.provider"
          outlined
          background-color="white"
          dense
          label="Provider"
        ></v-text-field>
        <v-text-field
          v-model="rekening.norek"
          outlined
          background-color="white"
          dense
          label="No. Rekening"
        ></v-text-field>
        <v-text-field
          v-model="rekening.nama"
          outlined
          background-color="white"
          dense
          label="Atas Nama"
        ></v-text-field>
      </div>
      <vue-html2pdf
        :show-layout="true"
        :float-layout="false"
        :preview-modal="false"
        :paginate-elements-by-height="1000"
        :pdf-quality="2"
        :manual-pagination="true"
        filename="Invoice"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="100%"
        :html-to-pdf-options="htmlToPdfOptions"
        ref="html2Pdf"
        @beforeDownload="beforeDownload($event)"
      >
        <section slot="pdf-content">
          <div class="col card mt" id="element">
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
                :items="items.data"
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
              </v-data-table>
              <v-data-table
                :items="items.itemTotal"
                class="row-pointers"
                :headers="headersTotals"
                :item-class="row_bot"
                dense
                :items-per-page="100"
                hide-default-footer
                :hide-default-header="true"
              >
                <template v-slot:[`item.jumlah`]="{ item }">
                  <span class="tx">{{ item.jumlah | currency("Rp. ") }}</span>
                </template>
                <template v-slot:[`item.subtotal`]="{ item }">
                  <span class="tx">{{ item.subtotal | currency("Rp. ") }}</span>
                </template>
              </v-data-table>
              <div class="d-block">
                <div class="lc" />
                <small class="font-weight-bold">Terbilang :</small>
                <div class="lc mb-4" />
                <small
                  ><em>{{ keterangan }}</em></small
                >
              </div>
              <div class="row p-4">
                <div class="col-md-8">
                  <small><em>Yang dibayarkan cash kepada Management</em></small>
                  <div class="row mt-2">
                    <div class="col">
                      <small><strong>Staff Management</strong></small>
                    </div>
                    <div class="col">
                      <small
                        ><strong class="text-right">{{
                          items.data[24].jumlah | currency("Rp. ")
                        }}</strong></small
                      >
                    </div>
                  </div>
                  <div class="row mt-n2">
                    <div class="col">
                      <small><strong>ATK & Transportasi</strong></small>
                    </div>
                    <div class="col">
                      <small
                        ><strong class="text-right">{{
                          items.data[28].jumlah | currency("Rp. ")
                        }}</strong></small
                      >
                    </div>
                  </div>
                  <div class="row mt-n2 align-items-center">
                    <div class="col">
                      <small><strong>Fee Management 9%</strong></small>
                    </div>
                    <div class="col">
                      <small
                        ><strong class="text-right">{{
                          items.itemTotal[1].subtotal | currency("Rp. ")
                        }}</strong></small
                      >
                    </div>
                  </div>
                  <div class="row mt-n2">
                    <div class="col">
                      <small><strong>PPn 10%</strong></small>
                    </div>
                    <div class="col">
                      <small
                        ><strong class="text-right">{{
                          items.itemTotal[3].subtotal | currency("Rp. ")
                        }}</strong></small
                      >
                    </div>
                  </div>
                  <div class="row mt-n2">
                    <div class="col">
                      <small><strong>Potong PPh 2%</strong></small>
                    </div>
                    <div class="col">
                      <small
                        ><strong class="text-right">{{
                          items.itemTotal[5].subtotal | currency("Rp. ")
                        }}</strong></small
                      >
                    </div>
                  </div>
                  <div class="row lc mb-5 w-75 text-center"></div>
                  <div class="row">
                    <div class="col">
                      <small><strong>Total</strong></small>
                    </div>
                    <div class="col">
                      <small
                        ><strong class="text-right">{{
                          (items.itemTotal[5].subtotal +
                            items.itemTotal[3].subtotal +
                            items.itemTotal[1].subtotal +
                            items.data[28].jumlah +
                            items.data[24].jumlah)
                            | currency("Rp. ")
                        }}</strong></small
                      >
                    </div>
                  </div>
                  <br />
                  <div class="d-block">
                    <small
                      ><em><strong>Atau Via Transfer</strong></em></small
                    >
                    <br />
                    <small
                      ><em
                        >Rekening {{ rekening.provider
                        }}<strong> {{ rekening.norek }}</strong> a.n
                        <strong>{{ rekening.nama }}</strong></em
                      ></small
                    >
                  </div>
                </div>
                <div class="col-md-4 text-center">
                  <div class="d-block">
                    <small>Pandeglang , {{ tanggal }}</small>
                    <br />
                    <small><strong>Mega Lines Bersaudara</strong></small>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h4>
                      <strong
                        ><u>{{ direktur }}</u></strong
                      >
                    </h4>
                    <small class="mt-n3">Direktur</small>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-start">
                <small class="text-primary"
                  ><strong>Head Office :</strong></small
                >
                <small class="w-75 text-primary"
                  ><strong
                    >Jl. Ade Irma Suryani Nasution No. 19 Rt.03/13 Kabayan, Kota
                    Pandeglang - Banten 42212</strong
                  ></small
                >
              </div>
            </div>
          </div>
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>

<script>
import datas from "../singleton/models_invoice";
import Vue2Filters from "vue2-filters";
import moment from "moment-timezone";
export default {
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      items: datas,
      tanggal: null,
      direktur: "Yadi Slamet Riyadi",
      rekening: {
        provider: "BNI",
        norek: "0331574151",
        nama: "Alex Iskandar",
      },
      keterangan:
        "Keterangan : Staff Management dan ATK Transportasi tidak masuk dalam fee management",
      active: true,
      data: {
        nomerInvoice: "",
        lokasiUK: "",
      },
      htmlToPdfOptions: {
        margin: 2,
        filename: `Invoice.pdf`,
        enableLinks: false,
      },
      headersTotals: [
        {
          text: "Title",
          align: "start",
          filterable: false,
          sortable: false,
          width: "100%",
          value: "title",
          class: "head",
        },
        {
          text: "Jumlah",
          align: "center",
          filterable: false,
          sortable: false,
          width: "1%",
          value: "jumlah",
          class: "head",
        },
        {
          text: "%",
          align: "center",
          width: "1%",
          filterable: false,
          sortable: false,
          value: "persen",
          class: "head",
        },
        {
          text: "Total",
          align: "end",
          width: "1%",
          filterable: false,
          sortable: false,
          value: "subtotal",
          class: "head",
        },
      ],
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
    elemen() {
      return document.getElementById("element");
    },
  },
  created() {
    this.tanggal = moment.tz("Asia/Jakarta").format("DD MMMM YYYY");
  },
  methods: {
    row_classes(item) {
      if (item.satuan === null) {
        return "color"; //can also return multiple classes e.g ["orange","disabled"]
      }
    },
    row_bot(item) {
      if (item.jumlah != null) {
        return "color";
      }
    },
    printPDF() {
      this.$refs.html2Pdf.generatePdf();
    },
    beforeDownload({ html2pdf, element }) {
      html2pdf()
        .set(this.htmlToPdfOptions)
        .from(element)
        .toPdf()
        .get("pdf")
        .then((pdf) => {
          const totalPages = pdf.internal.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(1);
            pdf.setTextColor(150);
            pdf.text(
              "Page " + i + " of " + totalPages,
              pdf.internal.pageSize.getWidth() * 0.88,
              pdf.internal.pageSize.getHeight() - 0.3
            );
          }
        })
        .save();
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
.mf {
  margin-top: -45px;
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
.lc {
  height: 1px;
  background: black;
}
</style>