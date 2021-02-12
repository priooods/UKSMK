<template>
  <div>
    <h1>Hallo World</h1>
    <!-- <a-table
      :columns="columns"
      :scroll="{ x: 1300 }"
      bordered
      :customRow="clickRow"
      :data-source="users"
      :row-key="
        (record, index) => {
          return index;
        }
      "
      class="tabs"
      :pagination="{ pageSize: 10 }"
    >
      <span slot="customTitle"></span>
      <p slot="no"></p>
      <p slot="nik" slot-scope="text" prop="nik">{{ text.toUpperCase() }}</p>
      <p slot="nama" slot-scope="text" prop="nama">
        {{ text.toUpperCase() }}
      </p>
      <p slot="jabatan" slot-scope="text">{{ text.toUpperCase() }}</p>
      <p slot="status" slot-scope="text">{{ text.toUpperCase() }}</p>
      <p slot="gaji" slot-scope="text">{{ text | currency("Rp. ") }}</p>
      <p slot="bpjs_kesehatan" slot-scope="text">
        {{ text | currency("Rp. ") }}
      </p>
      <p slot="bpjs_tenagakerja" slot-scope="text">
        {{ text | currency("Rp. ") }}
      </p>
      <p slot="uang_makan" slot-scope="text">{{ text | currency("Rp. ") }}</p>
      <p slot="gaji_total" slot-scope="text">{{ text | currency("Rp. ") }}</p>
    </a-table> -->
  </div>
</template>

<script>
export default {
  // props: {
  //   users: null,
  // },
  data() {
    return {
      data: null,
      columns: [
        {
          title: "No",
          key: "no",
          width: 50,
          fixed: "left",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "no" },
          align: "center",
          customRender: (value, row, index) => {
            return index + 1;
          },
        },
        {
          title: "NIK",
          dataIndex: "nik",
          width: 150,
          align: "center",
          key: "nik",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "nik" },
        },
        {
          title: "Nama Lengkap",
          width: 150,
          dataIndex: "nama",
          slots: { title: "customTitle" },
          key: "nama",
          scopedSlots: {
            customRender: "nama",
          },
        },
        {
          title: "Jabatan",
          key: "jabatan",
          width: 200,
          slots: { title: "customTitle" },
          dataIndex: "jabatan",
          scopedSlots: {
            customRender: "jabatan",
          },
        },
        {
          title: "Status",
          key: "status",
          ellipsis: true,
          dataIndex: "status",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "status" },
        },
        {
          title: "Gaji Diterima",
          dataIndex: "gaji",
          align: "center",
          slots: { title: "customTitle" },
          key: "gaji",
          scopedSlots: { customRender: "gaji" },
        },
        {
          title: "BPJS Kesehatan",
          key: "bpjs_kesehatan",
          align: "center",
          slots: { title: "customTitle" },
          dataIndex: "bpjs_kesehatan",
          scopedSlots: {
            customRender: "bpjs_kesehatan",
          },
        },
        {
          title: "BPJS TenagaKerja",
          key: "bpjs_tenagakerja",
          slots: { title: "customTitle" },
          dataIndex: "bpjs_tenagakerja",
          align: "center",
          scopedSlots: {
            customRender: "bpjs_tenagakerja",
          },
        },
        {
          title: "Uang Makan",
          key: "uang_makan",
          align: "center",
          slots: { title: "customTitle" },
          dataIndex: "uang_makan",
          scopedSlots: {
            customRender: "uang_makan",
          },
        },
        {
          title: "Gaji Total",
          align: "center",
          key: "gaji_total",
          dataIndex: "gaji_total",
          slots: { title: "customTitle" },
          scopedSlots: {
            customRender: "gaji_total",
          },
        },
      ],
    };
  },
  // async created() {
  //   this.users = await this.semuaKaryawan;
  // },
  methods: {
    clickRow(records) {
      return {
        props: { val: null },
        on: {
          click: () => {
            console.log(records);
          },
        },
      };
    },
    checkactive(val) {
      return (this.active = val);
    },
  },
  // computed: {
  //   semuaKaryawan() {
  //     return this.$store.state.karyawanUser;
  //   },
  // },
};
</script>

<style>
</style>