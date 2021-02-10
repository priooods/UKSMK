<template>
  <div>
    <div class="row">
      <vs-button
        block
        class="col-sm mt-2 text-justify"
        :active="active == 0"
        flat
        @click="allData((active = 0))"
      >
        <div class="d-block">
          <p>Total Karyawan</p>
          <p>{{ total.semua }} Karyawan</p>
        </div>
      </vs-button>
      <vs-button
        class="col-sm mt-2 text-justify"
        flat
        :active="active == 1"
        @click="allData((active = 1))"
      >
        <div class="d-block">
          <p>Karyawan UK I</p>
          <p class="tt">{{ total.uk1 }} Karyawan</p>
        </div>
      </vs-button>
      <vs-button
        class="col-sm mt-2 text-justify"
        flat
        :active="active == 2"
        @click="allData((active = 2))"
      >
        <div class="d-block">
          <p>Karyawan UK II</p>
          <p class="tt">{{ total.uk2 }} Karyawan</p>
        </div>
      </vs-button>
      <vs-button
        class="col-sm mt-2 text-justify"
        flat
        :active="active == 3"
        @click="allData((active = 3))"
      >
        <div class="d-block">
          <p>Karyawan UK III</p>
          <p class="tt">{{ total.uk3 }} Karyawan</p>
        </div>
      </vs-button>
    </div>

    <div class="d-flex justify-content-end align-items-center mt-3 mid">
      <h6 class="mr-auto font-weight-normal">List Semua Karyawan</h6>
      <vs-button to="/karyawan/add"> Tambah Karyawan Baru </vs-button>
    </div>
    <div class="mt-3">
      <a-table
        :columns="columns"
        :scroll="{ x: 1300 }"
        bordered
        :data-source="users"
        :row-key="
          (record, index) => {
            return index;
          }
        "
        class="tabs"
        :pagination="{ pageSize: 10 }"
      >
        <!-- for row Items inside -->
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
      </a-table>
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import { mapActions } from "vuex";
export default {
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      total: {
        semua: 0,
        uk1: 0,
        uk2: 0,
        uk3: 0,
      },
      active: 0,
      users: null,
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
          width: 150,
          slots: { title: "customTitle" },
          dataIndex: "jabatan",
          scopedSlots: {
            customRender: "jabatan",
          },
        },
        {
          title: "Status",
          key: "status",
          width: 150,
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
  watch: {
    route: ["getAllUsers", "getIndexing"],
  },
  mounted() {
    this.findId("2");
    this.allData(this.active);
    this.getIndexing();
  },
  methods: {
    ...mapActions({
      findId: "find",
    }),

    getIndexing() {
      this.total.semua = this.users.length;
      const uki = this.users.filter(function (dt) {
        return dt.uk == "I";
      });
      const uke = this.users.filter(function (dt) {
        return dt.uk == "II";
      });
      const uko = this.users.filter(function (dt) {
        return dt.uk == "III";
      });
      this.total.uk1 = uki.length;
      this.total.uk2 = uke.length;
      this.total.uk3 = uko.length;
    },
    allData(value) {
      if (value == 0) {
        return (this.users = this.allKaryawan);
      }
    },
  },
  computed: {
    allKaryawan() {
      return this.$store.state.karyawanUser;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");

.row {
  .vs-button {
    padding-top: 15px;
    .d-block {
      margin-left: -80px;
      :nth-child(2) {
        font-size: 30px;
        margin-top: -10px;
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 900px;
      }
    }
  }
}
.tabs {
  overflow-y: auto;
  th {
    background: whitesmoke !important;
  }
  p,
  span {
    color: black;
    font-weight: 500;
    font-size: 12px;
  }
}
@media screen and(max-width: 700px) {
  .row {
    .vs-button {
      padding-top: 9px !important;
      .d-block {
        margin-left: -150px !important;
      }
      .tt {
        font-size: 20px !important;
      }
    }
  }
  .mid {
    .vs-button {
      font-size: 9px;
    }
  }
}
@media screen and(max-width: 1190px) {
  .row {
    .vs-button {
      padding-top: 9px !important;
      .d-block {
        margin-left: -40px !important;
      }
      p {
        font-size: 20px !important;
      }
    }
  }
}
</style>