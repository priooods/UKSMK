<template>
  <div class="d-flex justify-content-center align-items-center cc">
    <div class="text-center w-50">
      <h1 class="font-weight-bold tc">404</h1>
      <p>Halaman yang anda cari tidak ditemukan.</p>
      <div class="d-flex justify-content-center">
        <vs-button class="text-center" href="/">Kembali Login</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss">
.cc {
  height: 100vh;
  .tc {
    font-size: 150px;
  }
}
</style>