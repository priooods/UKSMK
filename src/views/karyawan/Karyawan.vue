<template>
  <div>
    <div class="row">
      <vs-button
        block
        class="col-sm mt-2 text-justify"
        :active="active == 0"
        flat
        v-on:click="checkactive((active = 0))"
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
        v-on:click="checkactive((active = 1))"
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
        v-on:click="checkactive((active = 2))"
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
        @click="checkactive((active = 3))"
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
      <tabelkaryawan ref="tabel" />
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import tabelkaryawan from "../tabel/tabel_karyawan";
import { mapActions, mapMutations } from "vuex";
export default {
  components: { tabelkaryawan },
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
      users: [],
    };
  },
  mounted() {
    this.checkactive();
    this.getIndexing();
  },
  methods: {
    ...mapMutations({
      all: "all",
    }),
    ...mapActions({
      findId: "find",
      byuk: "byuk",
      allUsers: "allUsers",
    }),
    // checkactive() {
    //   switch (this.active) {
    //     case 0:
    //       this.allUsers();
    //       this.users = this.allKaryawan;
    //       break;
    //     case 1:
    //       this.byuk("I");
    //       this.users = this.allKaryawan;
    //       console.log(this.users);
    //       break;
    //     case 2:
    //       this.byuk("II");
    //       this.users = this.allKaryawan;
    //       console.log(this.users);
    //       break;
    //     case 3:
    //       this.byuk("III");
    //       this.users = this.allKaryawan;
    //       break;
    //   }
    // },
    checkactive() {
      return this.$refs.tabel.checkactive(() => {
        switch (this.active) {
          case 0:
            this.allUsers();
            this.users = this.allKaryawan;
            break;
          case 1:
            this.byuk("I");
            this.users = this.allKaryawan;
            console.log(this.users);
            break;
          case 2:
            this.byuk("II");
            this.users = this.allKaryawan;
            console.log(this.users);
            break;
          case 3:
            this.byuk("III");
            this.users = this.allKaryawan;
            break;
        }
      });
    },
    getIndexing() {
      this.total.semua = this.allKaryawan.length;
      const uki = this.allKaryawan.filter(function (dt) {
        return dt.uk == "I";
      });
      const uke = this.allKaryawan.filter(function (dt) {
        return dt.uk == "II";
      });
      const uko = this.allKaryawan.filter(function (dt) {
        return dt.uk == "III";
      });
      this.total.uk1 = uki.length;
      this.total.uk2 = uke.length;
      this.total.uk3 = uko.length;
      // this.allKaryawan();
    },
  },
  computed: {
    allKaryawan() {
      return this.$store.getters.allkaryawan;
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
    background: #dce6ff !important;
  }
  p {
    color: black;
    font-weight: 500;
    font-size: 11px;
  }
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