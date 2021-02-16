<template>
  <div class="dialog">
    <vs-dialog
      blur
      prevent-close
      not-center
      scroll
      overflow-hidden
      v-model="active"
    >
      <div>
        <h4 class="font-weight-bold text-center my-3">Buat Laporan Lainnya</h4>
        <vs-select
          placeholder="Pilih Laporan"
          block
          class="mt-5"
          v-model="value"
          color="danger"
        >
          <vs-option label="Laporan BPJS" value="0"> Laporan BPJS </vs-option>
          <vs-option label="Laporan UK I" value="1"> Laporan UK I </vs-option>
          <vs-option label="Laporan UK II" value="2"> Laporan UK II </vs-option>
          <vs-option label="Laporan UK III" value="3">
            Laporan UK III
          </vs-option>
        </vs-select>
        <v-btn
          block
          class="mt-5"
          @click="onClickButton"
          depressed
          color="primary"
          >Buat Laporan</v-btn
        >
      </div>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      value: "0",
    };
  },
  methods: {
    open() {
      return (this.active = true);
    },
    onClickButton() {
      if (!this.value == "0") {
        this.$emit("clicked", this.value);
        return (this.active = false);
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");
// .vs-dialog {
//   h4 {
//     font-family: "Source Sans Pro", sans-serif;
//     font-weight: 700;
//   }
//   .vs-input {
//     width: 100%;
//   }
// }
</style>