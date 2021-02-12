<template>
  <div>
    <div class="d-block in">
      <div
        class="d-block d-lg-flex d-md-flex d-sm-flex align-items-center justify-content-end"
      >
        <h6 class="mr-auto">Tabel {{ cek }}</h6>
        <vs-button primary :active="active == 1" to="karyawan/add">
          Tambah Karyawan Baru
        </vs-button>
      </div>
      <div class="row mt-5">
        <div class="col-md-3">
          <div class="card" elevation="2">
            <div class="d-flex">
              <div class="d-block"></div>
              <h1>{{ total.all }}</h1>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <v-card elevation="2">
            <v-card-title> UK I</v-card-title>
          </v-card>
        </div>
        <div class="col-md-3">
          <v-card elevation="2">
            <v-card-title> UK II</v-card-title>
          </v-card>
        </div>
        <div class="col-md-3">
          <v-card elevation="2">
            <v-card-title> UK III</v-card-title>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
// import tabelkaryawan from "../../components/tabel/tabel_karyawan";
// import { mapActions, mapMutations } from "vuex";
export default {
  // components: { tabelkaryawan },
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      cek: "Semua Karyawan",
      total: {
        all: 0,
        uk1: 0,
        uk2: 0,
        uk3: 0,
      },
      active: 0,
      users: [],
    };
  },
  computed: {
    tex() {
      return console.log("Testing");
    },
  },
  // ...mapActions({
  //   findId: "find",
  //   byuk: "byuk",
  //   allUsers: "allUsers",
  // }),
  // ...mapActions(["allUsers"]),
  // ...mapMutations({
  //   all: "all",
  // }),
  // watch: {
  //   users: function () {
  //     this.$store.dispatch(`allUsers`, this.$store.state.response.token);
  //   },
  // },
  mounted() {
    console.log(this.$store.state.karyawanUser.length);
    // this.$store
    //   .dispatch(`allUsers`)
    //   .then(() => {
    //     // console.log(data);
    //   });
  },
  methods: {
    callingUsers() {
      this.allUsers;
    },
    // checkactive() {
    //   switch (this.active) {
    //     case 0:
    //       this.allUsers();
    //       this.users = this.$store.getters.allkaryawan;
    //       break;
    //     case 1:
    //       this.byuk("I");
    //       this.users = this.$store.getters.allkaryawan;
    //       break;
    //     case 2:
    //       this.byuk("II");
    //       this.users = this.$store.getters.allkaryawan;
    //       break;
    //     case 3:
    //       this.byuk("III");
    //       this.users = this.$store.getters.allkaryawan;
    //       break;
    //   }
    // },
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
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap");

.in {
  margin-top: 20px;
  h6 {
    font-size: 25px;
    font-weight: 700;
    color: #252525;
    font-family: "Montserrat", sans-serif;
  }
}
@media screen and(max-width: 700px) {
}
@media screen and(max-width: 1190px) {
}
</style>