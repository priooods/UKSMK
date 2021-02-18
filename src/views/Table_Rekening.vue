<template>
  <div class="card">
    <v-data-table
      :items="itemsWithIndex"
      class="row-pointer"
      :headers="head"
      hide-default-footer
      :items-per-page="1000"
    >
      <template v-slot:[`item.index`]="{ item }">
        <span class="tx">{{ item.index }}</span>
      </template>
      <template v-slot:[`item.nama`]="{ item }">
        <span class="tx">{{ item.nama }}</span>
      </template>
      <template v-slot:[`item.gender`]="{ item }">
        <span class="tx">{{ item.gender }}</span>
      </template>
      <template v-slot:[`item.no_id`]="{ item }">
        <span class="tx">{{ item.no_id }}</span>
      </template>
      <template v-slot:[`item.cif`]="{ item }">
        <span class="tx">{{ item.cif }}</span>
      </template>
      <template v-slot:[`item.nama_rekening`]="{ item }">
        <span class="tx">{{ item.nama_rekening }}</span>
      </template>
      <template v-slot:[`item.tipe_id`]="{ item }">
        <span class="tx">{{ item.tipe_id }}</span>
      </template>
      <template v-slot:[`item.nama_perusahaan`]="{ item }">
        <span class="tx">{{ item.nama_perusahaan }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    item: Array,
    head: Array,
  },
  computed: {
    itemsWithIndex() {
      return this.item.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
  },
  mounted() {
    this.itemrekening = this.$store.state.karyawanUser;
  },
};
</script>

<style lang="scss">
.tx {
  font-size: 11px;
}
</style>