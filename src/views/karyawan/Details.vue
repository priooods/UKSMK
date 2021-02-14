<template>
  <div>
    <h1>{{ $store.state.userDetail.nama }}</h1>
  </div>
</template>

<script>
export default {
  name: "Details",
  mounted() {
    console.log(this.$store.getters.userDetail);
  },
};
</script>

<style>
</style>