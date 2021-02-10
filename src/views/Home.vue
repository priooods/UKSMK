<template>
  <div class="about">
    <h1 class="col-md-5">Welcome back {{ use }}</h1>
    <p class="col-md-5">
      Saat ini halaman utama sedang dilakukan penyesuaian. Harap menunggu update
      selanjutnya untuk menggunakan semua fitur yang akan disediakan
    </p>
    <p class="col-md-5">
      Untuk saat ini silahkan menggunakan menu Karyawan untuk menambahkan data
      karyawan
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      use: [],
      labelCol: { sm: { span: 3, offset: 12 } },
      // wrapperCol: { span: 14 },
    };
  },
  mounted() {
    this.use = this.$store.getters.users.data.nama;
    // console.log(this.$store.getters.users.data.nama);
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>

<style lang="scss">
.in {
  margin-top: -20px;
}
</style>