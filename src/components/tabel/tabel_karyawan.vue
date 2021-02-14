<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Cari Data Karyawan"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :items="itemsWithIndex"
        class="row-pointer"
        :search="search"
        :headers="headers"
        @click:row="clickRow"
      >
        <template v-slot:[`item.index`]="{ item }">
          <span class="tx">{{ item.index }}</span>
        </template>
        <template v-slot:[`item.nik`]="{ item }">
          <span class="tx">{{ item.nik }}</span>
        </template>
        <template v-slot:[`item.nama`]="{ item }">
          <span class="tx font-weight-bold">{{ item.nama.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.jabatan`]="{ item }">
          <span class="tx">{{ item.jabatan.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <span class="tx">{{ item.status.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.gender`]="{ item }">
          <span class="tx">{{ item.gender.toUpperCase() }}</span>
        </template>
        <template v-slot:[`item.tanggal_lahir`]="{ item }">
          <span class="tx">{{ item.tanggal_lahir }}</span>
        </template>
        <template v-slot:[`item.gaji`]="{ item }">
          <span class="tx">{{ item.gaji | currency("Rp. ") }}</span>
        </template>
        <template v-slot:[`item.uang_makan`]="{ item }">
          <span class="tx">{{ item.uang_makan | currency("Rp. ") }}</span>
        </template>
        <template v-slot:[`item.gaji_total`]="{ item }">
          <span class="tx">{{ item.gaji_total | currency("Rp. ") }}</span>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "No",
          align: "start",
          filterable: false,
          sortable: false,
          value: "index",
          class: "head",
        },
        { text: "Nik", value: "nik", class: "head" },
        { text: "Nama Lengkap", value: "nama", class: "head" },
        { text: "Jabatan", value: "jabatan", class: "head" },
        { text: "Status", value: "status", class: "head" },
        { text: "UK", value: "uk", class: "head", align: "center" },
        { text: "Gender", value: "gender", class: "head", align: "center" },
        {
          text: "Tanggal Lahir",
          class: "head",
          value: "tanggal_lahir",
          sortable: false,
        },
        { text: "Gaji", value: "gaji", class: "head" },
        { text: "Uang Makan", value: "uang_makan", class: "head" },
        { text: "Total", value: "gaji_total", class: "head" },
      ],
    };
  },
  methods: {
    clickRow(item) {
      const loading = this.$vs.loading({
        text: "Sedang Memuat Data...",
        background: "#000000",
        color: "#f6f6f6",
      });
      setTimeout(() => {
        loading.close();
        this.$router.push({ path: "karyawan/details" }, () => {
          this.$store.dispatch("find", item.id);
        });
      }, 5000);
    },
    checkactive(val) {
      return (this.active = val);
    },
  },
  computed: {
    itemsWithIndex() {
      return this.$store.state.karyawanUser.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
  },
};
</script>

<style lang="scss">
.row-pointer > .v-data-table__wrapper > table > tbody > tr :hover {
  cursor: pointer;
}
.tx {
  font-size: 11px;
}
.head {
  background: #b6dde8;
  font-weight: 800;
}
</style>