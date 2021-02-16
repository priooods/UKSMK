<template>
  <div>
    <div class="row justify-content-end align-items-top mb-5 mt-5">
      <div class="col mr-auto">
        <h3 class="font-weight-bold">Salary Karyawan</h3>
        <p class="s">
          Tekan tombol Buat laporan baru bila ingin mengubah laporan atau
          <br />
          Tekan Pengaturan untuk mengubah format
        </p>
      </div>
      <vs-button
        class="mt-3 col-md-2 my-auto"
        @click="opendialog"
        color="primary"
        depressed
        >Buat Laporan Baru</vs-button
      >
      <vs-button
        class="mt-3 col-md-1 my-auto"
        danger
        @click="printPDF((showing = !showing))"
        >Print</vs-button
      >
      <vs-button class="mt-3 col-md-1 mb-auto" success>Excel</vs-button>
    </div>
    <div class="ln my-5"></div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      :pdf-quality="2"
      :manual-pagination="false"
      filename="hee hee"
      pdf-format="a3"
      pdf-orientation="landscape"
      pdf-content-width="100%"
      ref="html2Pdf"
      @beforeDownload="beforeDownload($event)"
    >
      <section slot="pdf-content" class="px-5">
        <tabelbpjs
          class="col-md-12"
          ref="tabpjs"
          v-if="openTableBPJS"
          id="tabpjs"
          :models="models.headersBPJS"
          :totals="models.head"
          :judul="captions.judul"
          :subtitle="captions.subtitle"
          :date="'Bulan ' + captions.date"
          :diketahui="captions.diketahui"
          :from="captions.from"
          :kota="captions.kota"
          :tabelfields="dataTable"
          :tanggal_pengesahan="captions.tanggal_pengesahan"
        />
        <tabelUK
          v-else
          ref="tabUK"
          id="tabUK"
          :tabelfields="dataUK1"
          :judul="captionsUK.judul"
          :subtitle="captionsUK.subtitle"
          :totals="models.head"
          :date="'Bulan ' + captions.date"
          :models="models.headerKaryawan"
          :diketahui="captions.diketahui"
          :from="captions.from"
          :totalsfields="datatotalUK"
          :kota="captions.kota"
          :tanggal_pengesahan="captions.tanggal_pengesahan"
        />
      </section>
    </vue-html2pdf>
    <tabelbpjs
      v-if="openTableBPJS"
      ref="tabpjs"
      id="tabpjs"
      :models="models.headersBPJS"
      :totals="models.head"
      :judul="captions.judul"
      :subtitle="captions.subtitle"
      :date="'Bulan ' + captions.date"
      :diketahui="captions.diketahui"
      :from="captions.from"
      :kota="captions.kota"
      :tabelfields="dataTable"
      :tanggal_pengesahan="captions.tanggal_pengesahan"
    />
    <tabelUK
      v-else
      ref="tabUK"
      id="tabUK"
      :tabelfields="dataUK1"
      :judul="captionsUK.judul"
      :subtitle="captionsUK.subtitle"
      :totals="models.head"
      :date="'Bulan ' + captions.date"
      :models="models.headerKaryawan"
      :diketahui="captions.diketahui"
      :from="captions.from"
      :totalsfields="datatotalUK"
      :kota="captions.kota"
      :tanggal_pengesahan="captions.tanggal_pengesahan"
    />
    <dialogs ref="dialog" @clicked="onClickChild" />
  </div>
</template>

<script>
import tabelbpjs from "../../components/tabel/tabel_bpjs";
import dialogs from "../../components/Dialog";
import tabelUK from "../../components/tabel/tabel_sumarry_karyawan";
import timezone from "moment-timezone";
import model from "../../singleton/models_table";
export default {
  components: { tabelbpjs, tabelUK, dialogs },
  data: () => {
    return {
      openTableBPJS: true,
      captions: {
        judul: "DAFTAR BPJS KESEHATAN DAN KETENAGAKERJAAN KARYAWAN",
        subtitle:
          "KONTRAK TETAP TAMBAK UDANG VANNAME PT. UJUNG KULON SUKSES MAKMUR ABADI",
        date: null,
        diketahui: "PT. Ujung Kulon Sukses Makmur Abadi",
        from: "Mega Lines Bersaudara",
        kota: "Pandeglang",
        tanggal_pengesahan: null,
      },
      models: model,
      htmlToPdfOptions: {
        filename: `hehehe.pdf`,
        enableLinks: false,
      },
      dataTable: Object,
      valuOpenUk: "0",

      dataUK1: Object,
      datatotalUK: Object,

      captionsUK: {
        judul: "DATA GAJI KARYAWAN TAMBAK UK I CISAAT",
        subtitle: "TAMBAK UDANG VANNAME PT. UJUNG KULON SUKSES MAKMUR ABADI",
      },
    };
  },
  computed: {
    itemsWithIndex() {
      return this.$store.state.karyawanUser.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
    itemUK1() {
      return this.$store.state.ukone.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
  },
  created() {
    var tm = timezone.tz("Asia/Jakarta").format("MMMM YYYY");
    var full_tm = timezone.tz("Asia/Jakarta").format("D MMMM YYYY");
    this.captions.date = tm;
    this.captions.tanggal_pengesahan = full_tm;
    this.dataTable = this.itemsWithIndex;
    this.dataUK1 = this.itemUK1;
    this.datatotalUK = this.$store.state.ukone;
  },

  methods: {
    opendialog() {
      this.$refs.dialog.open();
    },
    onClickChild(value) {
      this.valuOpenUk = value;
      switch (this.valuOpenUk) {
        case "0":
          this.openTableBPJS = true;
          break;
        case "1":
          this.openTableBPJS = false;
          this.dataUK1 = this.$store.state.ukone.map((items, index) => ({
            ...items,
            index: index + 1,
          }));

          this.captionsUK.judul = "DATA GAJI KARYAWAN TAMBAK UK I CISAAT";
          this.captionsUK.subtitle =
            "TAMBAK UDANG VANNAME PT. UJUNG KULON SUKSES MAKMUR ABADI";
          break;
        case "2":
          this.openTableBPJS = false;

          this.datatotalUK = this.$store.state.uktwo;
          this.dataUK1 = this.$store.state.uktwo.map((items, index) => ({
            ...items,
            index: index + 1,
          }));
          this.captionsUK.judul = "DATA GAJI KARYAWAN TAMBAK UK II CISAAT";
          this.captionsUK.subtitle =
            "TAMBAK UDANG VANNAME PT. UJUNG KULON SUKSES MAKMUR ABADI";
          break;
        case "3":
          this.openTableBPJS = false;

          this.datatotalUK = this.$store.state.ukthree;
          this.dataUK1 = this.$store.state.ukthree.map((items, index) => ({
            ...items,
            index: index + 1,
          }));
          this.captionsUK.judul = "DATA GAJI KARYAWAN TAMBAK UK III CISAAT";
          this.captionsUK.subtitle =
            "TAMBAK UDANG VANNAME PT. UJUNG KULON SUKSES MAKMUR ABADI";
          break;
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
img {
  width: 65px;
}
.s {
  font-size: 14px;
}
.ln {
  height: 1px;
  background: black;
}
</style>