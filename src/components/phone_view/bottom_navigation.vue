<template>
  <div class="d-block d-md-none d-lg-none d-xl-none pos">
    <v-bottom-navigation :value="value" color="primary" grow>
      <v-btn to="/home">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/karyawan">
        <span>Karyawan</span>

        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>

      <v-btn to="/dev">
        <span>Invoice</span>

        <v-icon>mdi-archive</v-icon>
      </v-btn>
      <v-btn to="/dev">
        <span>Salary</span>

        <v-icon>mdi-cash</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
};
</script>

<style>
.pos {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
</style>