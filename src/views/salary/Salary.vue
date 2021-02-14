<template>
  <div>
    <div class="row justify-content-end align-items-top mb-5">
      <div class="col mr-auto">
        <h3 class="font-weight-bold">Salary Karyawan</h3>
        <p class="s">
          Tekan tombol Buat laporan baru bila ingin mengubah laporan atau
          <br />
          Tekan Pengaturan untuk mengubah format
        </p>
      </div>
      <vs-button class="mt-3 col-md-2 my-auto">Buat Laporan Baru</vs-button>
      <vs-button class="mt-3 col-md-1 my-auto" danger @click="printPDF()"
        >Pengaturan</vs-button
      >
    </div>
    <div class="ln my-5"></div>
    <div class="mt-5 mb-5">
      <div class="row py-5">
        <div class="col-md-1 d-none d-md-block d-lg-block d-xl-block">
          <img src="../../assets/logo_1.jpg" alt="log" />
        </div>
        <div class="col text-center text-uppercase ttl">
          <h4 class="font-weight-bold">
            DAFTAR BPJS KESEHATAN DAN KETENAGAKERJAAN KARYAWAN
          </h4>
          <h5 class="font-weight-bold">
            KONTRAK TETAP TAMBAK UDANG VANNAME PT. UJUNG KULON SUKSES MAKMUR
            ABADI
          </h5>
          <h5 class="font-weight-bold">BULAN {{ Bulan }}</h5>
        </div>
        <div class="col-md-1 d-none d-md-block d-lg-block d-xl-block cs">
          <img src="../../assets/logo_2.png" alt="log" />
        </div>
      </div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="1300px"
        ref="html2Pdf"
        @beforeDownload="beforeDownload($event)"
      >
        <section slot="pdf-content">
          <tabelbpjs ref="tabpjs" id="tabpjs" />
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>

<script>
import tabelbpjs from "../../components/tabel/tabel_bpjs";
import timezone from "moment-timezone";
export default {
  components: { tabelbpjs },
  data: () => {
    return {
      Bulan: "",
    };
  },
  created() {
    var tm = timezone.tz("Asia/Jakarta").format("MMMM YYYY");
    this.Bulan = tm;
    // this.$refs.tabpjs.sumgaji(this.$store.state.karyawanUser);
  },
  methods: {
    printPDF() {
      this.$refs.html2Pdf.generatePdf();
    },
    async beforeDownload({ html2pdf, options, pdfContent }) {
      await html2pdf()
        .set(options)
        .from(pdfContent)
        .toPdf()
        .get("pdf")
        .then((pdf) => {
          const totalPages = pdf.internal.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(8);
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